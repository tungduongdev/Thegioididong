const form = document.querySelector('#form-locate');
const adressForm = document.querySelector('#adress-form');
const closeForm = document.querySelector('#close-form');
const navmwg = document.querySelector('#navmwg');
const accessories = document.querySelector('#accessories');
const PC = document.querySelector('#PC-Show');
const navmwgLimit = document.querySelector('#navmwg-limit');
const slideImg = document.querySelector('#slide-img');
const dataProducts = JSON.parse(localStorage.getItem('products'));

const adressFormApear = () => {
    form.addEventListener('click', () => {
        adressForm.classList.toggle('show');
    });
}

const closeFormApear = () => {
    closeForm.addEventListener('click', () => {
        adressForm.classList.toggle('show');
    });
}

const navmwgApear = () => {
    accessories.addEventListener('mouseenter', () => {
        navmwg.classList.toggle('close', false);
    });

    accessories.addEventListener('mouseleave', () => {
        navmwg.classList.toggle('close', true);
    });
};

const PCShow = () => {
    PC.addEventListener('mouseenter', () => {
        navmwgLimit.classList.toggle('close', false);
    });

    PC.addEventListener('mouseleave', () => {
        navmwgLimit.classList.toggle('close', true);
    });
};
const scrollHidden = () => {
    form.addEventListener('click', function() {
        document.body.classList.toggle('scroll-hidden');
    });
    
    closeForm.addEventListener('click', function() {
        document.body.classList.remove('scroll-hidden');
    });
}
let current = 0;
const changeImg = () => {
    current++;
    slideImg.style.transform = `translateX(${-current * 100}%)`;
    if(current === slideImg.children.length/2 - 1) {
        current = -1;
    }
};
setInterval(changeImg, 5000);
window.onload = navmwgApear;
adressFormApear();
closeFormApear();
navmwgApear();
scrollHidden();
PCShow();
const total = document.getElementById('total');
const caculator = () => {
    total.innerHTML = dataProducts.length;
};
caculator();

const closeCart = () => {
    if(dataProducts.length === 0){
        total.classList.add('close');
    }
};
closeCart();

const nextSlide = () => {
    const prev = document.querySelector('.arrow-left');
    const next = document.querySelector('.arrow-right');
    const slideImg = document.querySelector('#slide-img');
    let current = 0;
    next.addEventListener('click', () => {
        current++;
        slideImg.style.transform = `translateX(${-current * 100}%)`;
        if(current === slideImg.children.length/2 - 1) {
            current = -1;
        }
    });
    prev.addEventListener('click', () => {
        current--;
        slideImg.style.transform = `translateX(${-current * 100}%)`;
        if(current < 0) {
            current = slideImg.children.length/2 - 1;
            slideImg.style.transform = `translateX(${-current * 100}%)`;
        }
    });
};

const showSlidebar = () => {
    const stickySlide = document.querySelector('.sticky-slidebar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 400){
            stickySlide.classList.add('show');
        } else {
            stickySlide.classList.remove('show');
        }
    });
};
showSlidebar();