//* Password Show *//
const passwords = document.querySelectorAll('.passwords');
passwords.forEach(element => {
    const customInput = element.querySelector('.customInput');
    const eyeIcon = element.querySelector('.passIcon');
    
    eyeIcon.addEventListener('click', () => {
        if (customInput.type === 'password') {
            customInput.type = 'text';
        } else {
            customInput.type = 'password';
        }
    })
});

//* Password Matching */

const submit = document.querySelector('.submit');
const passwordInputs = document.querySelectorAll('.passwordInput');
submit.addEventListener('click', (e) => {
    for (let i = 0; i < passwordInputs.length; i++) {
        if (passwordInputs[0].value === passwordInputs[1].value) {
            submit.disabled = false;
        } else {
            submit.disabled = true;
            passwordInputs[1].style.border = 'solid 2px red';
            e.preventDefault();
        }
    }
})

//* Search Button *//

const searchBtn = document.querySelectorAll('.fa-search');
const searchInput = document.querySelector('#search');
const searchDiv = document.querySelector('.searchDiv');
searchBtn[0].addEventListener('click', () => {
    searchDiv.classList.toggle('searchDivClicked')
})

//* POPUP *//

const popupName = document.querySelector('.popupName');
const popupSurname = document.querySelector('.popupSurname');
const popupRegion = document.querySelector('.popupRegion');
const popupPosition = document.querySelector('.popupPosition');
const popup = document.querySelector('.popup');

document.querySelector('.submit').addEventListener('click', (e)=> {
    // e.preventDefault();
    popup.style.display = "flex";
    const userName = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    let region = document.querySelector('input[name="region"]:checked').title;
    let position = document.querySelector('input[name="position"]:checked').title;

    popupName.textContent = userName;
    popupSurname.textContent = surname;
    popupRegion.textContent = region;
    popupPosition.textContent = position;
})

const closeBtn = document.querySelector('.popupBtn');

closeBtn.addEventListener('click', () => {
    popup.style.display = "none";
})

//* Burger Menu *//

const burger = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burgerMenu');
const respMenu = burgerMenu.querySelector('.menu');

burger.addEventListener('click', () => {
    if (respMenu.style.display === "none") {
        respMenu.style.display = "block";
        burger.classList.add('burgerAn')
    } else {
        respMenu.style.display = "none";
        burger.classList.remove('burgerAn')
    }
})
