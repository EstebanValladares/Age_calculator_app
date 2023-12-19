const dateForm = document.querySelector('.form-data');
const days = document.querySelector('#day');
const months = document.querySelector('#month');
const years = document.querySelector('#year');
const textDay = document.querySelector('.dateDays')
const textYear = document.querySelector('.dateYears')
const textMonth = document.querySelector('.dateMonths')

dateForm.addEventListener('submit',dateFormAll);

let today = new Date();
let dayss = today.getDate();
let mess = today.getMonth();
let yearss = today.getFullYear();

function dateFormAll(e){
    e.preventDefault();
    const textDate = document.querySelector('.text')
    const numberDay = parseInt(days.value);
    const numberMonth = parseInt(months.value) -1;
    const numberYear = parseInt(years.value);
    const yearAll = yearss - numberYear;
    const monthAll = mess - numberMonth;
    const dayAll = dayss - numberDay;

    if(days.value === '' || months.value === '' || years.value === '' || numberDay > 31 || numberMonth > 13 || numberYear > 2023){
        days.classList.add('colorAlert')
        months.classList.add('colorAlert')
        dateForm.classList.add('colorTextAlert')
        years.classList.add('colorAlert')
        textDate.classList.add('colorTextAlert')
        textDate.textContent = 'Must be a valid date'
    }else{
        days.classList.remove('colorAlert')
        months.classList.remove('colorAlert')
        dateForm.classList.remove('colorTextAlert')
        years.classList.remove('colorAlert')
        textDate.classList.remove('colorTextAlert')
        textDate.textContent = ''

        textDay.innerText = dayAll
        textMonth.innerText = monthAll
        textYear.innerText = yearAll
    }

}