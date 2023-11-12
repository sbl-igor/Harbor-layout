const nav = document.querySelector('#nav');
const btnBurger = document.querySelector('#burger');
const btnBurgerImg = document.querySelector('#burger-image');

btnBurger.onclick = () => {
    if (nav.classList.toggle('open')) {
        document.documentElement.scrollTop = 0;
        btnBurgerImg.src = './img/icons/cross.png';
        document.body.classList.add('no-scroll');
    } else {
        btnBurgerImg.src = './img/icons/burger-menu-svg.svg';
        document.body.classList.remove('no-scroll');
    }
}

AOS.init();

const arrOfItemsMenu = document.querySelectorAll('.header-nav__item');
console.log('arrOfItemsMenu', arrOfItemsMenu);
arrOfItemsMenu.forEach((link, indexOflink) => {
    let arrOfValues = [];
    let value = 50;
    for (let i = 0; i < arrOfItemsMenu.length; i++) {
        value+=50;
        arrOfValues.push(value);
    }
    link.setAttribute('data-aos-delay', arrOfValues[indexOflink])
})

const arrOfCardsMarks = document.querySelectorAll('.cards-marks__item');
arrOfCardsMarks.forEach((item, indexOfItem) => {
    let arrOfValues = [];
    let value = 200;
    for (let i = 0; i < arrOfCardsMarks.length; i++) {
        value+=200;
        arrOfValues.push(value);
    }
    item.setAttribute('data-aos-delay', arrOfValues[indexOfItem])
})