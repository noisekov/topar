const skillItem = document.querySelectorAll('.skills__item');
const skillImg = document.querySelectorAll('.skills-block');
const blockSkills = document.getElementsByClassName('our-skills');

skillItem.forEach(item => {
    item.addEventListener('click', changeSkills);
})

function changeSkills () {
    skillItem.forEach(item => {
        item.classList.remove('active');
    })
    skillImg.forEach(img => {
        img.classList.add('hidden');
    })
    //Если кликаем на li то мы по дата-атрибуту находим класс с таким же названием и удаляем у него скрытие.
    document.querySelector(`.skills-block.${this.dataset.type}`).classList.remove('hidden');

    //Если артибут у li такой, то мы меняем бекграуд у всего блока.
    if (this.dataset.type === 'design') {
        blockSkills[0].style.backgroundColor = '#d3dee0';
    } else if (this.dataset.type === 'ui') {
        blockSkills[0].style.backgroundColor = '#E5ECED';
    } else if (this.dataset.type === 'front') {
        blockSkills[0].style.backgroundColor = 'yellowgreen';
    } else if (this.dataset.type === 'back') {
        blockSkills[0].style.backgroundColor = 'pink';
    } else if (this.dataset.type === 'seo') {
        blockSkills[0].style.backgroundColor = 'brown';
    } else if (this.dataset.type === 'ppc') {
        blockSkills[0].style.backgroundColor = 'wheat';
    } else if (this.dataset.type === 'soft') {
        blockSkills[0].style.backgroundColor = 'violet';
    } else if (this.dataset.type === 'analit') {
        blockSkills[0].style.backgroundColor = 'lightskyblue';
    }
    this.classList.add('active');
}

const container = document.getElementById("myCarousel");
const options = { 
    infinite: true,
    adaptiveHeight: true,
    transition:  "slide" ,
 };
new Carousel(container, options);

//change type callback connection in footer page
const btnCommunication = document.querySelectorAll(".choose-communication__btn");
const btnCommunicationName = document.querySelector(".choose-communication__label-name");
const btnCommunicationInput = document.querySelector(".choose-communication__input");

btnCommunication.forEach(btn => {
    btn.addEventListener('click', changeCallbackCommunication);
})

function changeCallbackCommunication () {
    btnCommunication.forEach(btn => {
        btn.classList.remove("choose-communication__btn--active");
    })
    this.classList.add("choose-communication__btn--active");


    if (this === btnCommunication[0]) {
        btnCommunicationName.textContent = "Введите Ваш номер телефона *";
        btnCommunicationInput.setAttribute('placeholder', '+7 (___) ___-__-__');
    } else {
        btnCommunicationName.textContent = "Введите Ваш email *";
        btnCommunicationInput.setAttribute('placeholder', 'example@example.example');
    }
}

(function () {
    const header = document.querySelector('.header');
    const wrapper = document.querySelector('.wrapper-bg');
  
    window.onscroll = () => {
      if (window.scrollY > 0) {
        header.classList.add('header--fix');
        wrapper.classList.add('wrapper-bg--fix');
      } else {
        header.classList.remove('header--fix');
        wrapper.classList.remove('wrapper-bg--fix');
      }
    }
})()

const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const headerBlock = document.querySelector('.header__block');
const header = document.querySelector('.header');

burger.addEventListener('click', openMenu);

function openMenu () {
    body.classList.toggle('no-scroll');
    headerBlock.classList.toggle('header__block--show');
    header.classList.toggle('header--show');
    burger.classList.toggle('burger--show');
}

//AOS
AOS.init();

//open burger menu items
const itemBurgerMenu = document.querySelectorAll('.menu__link-arrow');
const dropdownMenu = document.querySelectorAll('.dropdown-menu');

itemBurgerMenu.forEach(item => {
    item.addEventListener('click', openItemsBurger);
})

function openItemsBurger () {
    itemBurgerMenu.forEach((item , index) => {
        if (this === item) {
            item.classList.toggle('menu__link-arrow--rotate');
            dropdownMenu[index].classList.toggle('dropdown-menu--open');
        } else {
            item.classList.remove('menu__link-arrow--rotate');
            dropdownMenu[index].classList.remove('dropdown-menu--open');
        }
    })
}