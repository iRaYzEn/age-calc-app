// i'm, so sorry for the terbile code but i am new and even if i can make it better i would rather keep it 
// because i think i'm going to break it in some point i will submit the best practic version when i am better at coding 
// using vim btw 


const input = document.querySelectorAll(".input__input");
const yearInput = document.querySelector(".input__input-year");
const monthInput = document.querySelector(".input__input-month");
const dayInput = document.querySelector(".input__input-day");
const dashs = document.querySelectorAll(".dash");
const form = document.querySelector(".form");
const dashYear = document.querySelector(".dash__year");
const dashMonth = document.querySelector(".dash__month");
const dashDay = document.querySelector(".dash__day");
const label = document.querySelectorAll(".input__label");
const labelYear = document.querySelector(".input__label-year");
const labelDay = document.querySelector(".input__label-day");
const labelMonth = document.querySelector(".input__label-month");
const date = new Date();
const currYear = date.getFullYear();
const currMonth = date.getMonth() + 1;
const currDay = date.getDate();
const errorElement = document.querySelector(".error-element");
const errorElementYear = document.querySelector(".error-element-year");
const errorElementMonth = document.querySelector(".error-element-month");
const errorElementDay = document.querySelector(".error-element-day");

form.addEventListener("submit", e => {
    e.preventDefault();
    let messages = [];

    if (Number(yearInput.value) > currYear || yearInput.value == "") {
        if (yearInput.value == "") {
            errorElementYear.textContent = "Must be valid year"
        } else {
            errorElementYear.textContent = "Must be in the past"
        }
        messages.push("error")
        yearInput.classList.add("error-input-year")
        labelYear.style.color = "hsl(0, 100%, 67%)"

    } else {
        errorElementYear.textContent = ""
        yearInput.classList.remove("error-input-year")
        labelYear.style.color = "hsl(0, 1%, 44%)"
    }

    if (monthInput.value == "" || Number(monthInput.value) > 12) {
        errorElementMonth.textContent = "must be valid month"
        monthInput.classList.add("error-input-month")
        labelMonth.style.color = "hsl(0, 100%, 67%)"
        messages.push("error")
    } else {
        errorElementMonth.textContent = ""
        monthInput.classList.remove("error-input-month")
        labelMonth.style.color = "hsl(0, 1%, 44%)"
    }

    if (dayInput.value == "" || Number(dayInput.value) > 31) {
        errorElementDay.textContent = "Must be valid day"
        dayInput.classList.add("error-input-day")
        labelDay.style.color = "hsl(0, 100%, 67%)"
        messages.push("error")
    } else {
        errorElementDay.textContent = ""
        dayInput.classList.remove("error-input-day")
        labelDay.style.color = "hsl(0, 1%, 44%)"
    }

    if (messages.length == 0) {
        const years = currYear - Number(yearInput.value);

        if (Number(monthInput.value) === currMonth) {
            if (Number(dayInput.value) >= currDay) {
                dashYear.textContent = years;
            } else {
                dashYear.textContent = years - 1;
            }
        } else if (Number(monthInput.value) < currMonth) {
            dashYear.textContent = years;
        }


        if (Number(monthInput.value) == currMonth) {
            dashMonth.textContent = 0;
        } else if (Number(dayInput.value) == currDay) {
            dashMonth.textContent = Math.abs(Number(monthInput.value) - currMonth);
        } else {
            dashMonth.textContent = Math.abs(Number(monthInput.value) - currMonth) - 1;
        }

        const dayDate = 30 + currDay + 1 - Number(dayInput.value);
        if (Number(dayInput.value) == currDay) {
            dashDay.textContent = 0;
        } else if (dayDate >= 32) {
            dashDay.textContent = 1;
            dashMonth.textContent = Math.abs(Number(monthInput.value) - currMonth)
        } else {
            dashDay.textContent = dayDate;
        }

    } else {
        dashDay.textContent = "--"
        dashMonth.textContent = "--"
        dashYear.textContent = "--"
    }
});
