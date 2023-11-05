const scrolging_inner_right = document.querySelector('.scrolging_inner_right');
const scrolging_inner_right2 = document.querySelector('.scrolging_inner_right2');
const products = [
    {
        id: 1,
        name: 'Điện thoại iPhone 14 Pro Max 512GB',
        image:'/img2/iphone-14-pro-max-vang-thumb-600x600 (1).webp',
        price: 32990000
    }
];
const total = document.getElementById('total');
const dataProducts = JSON.parse(localStorage.getItem('products'));
let productInCart = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')):[];

const render = () => {
    let data = ``;
    products.map(value => {
    data = `
    <a id="addcart" onclick="addToCart(${value.id})">MUA NGAY RẺ QUÁ 26.480.000₫</a>
    <div class="block2">
        <a href="">
            <p>MUA TRẢ GÓP</p>
            <span>Duyệt hồ sơ trong 5 phút</span>
        </a>
        <a href="">
            <p>TRẢ GÓP QUA THẺ</p>
            <span>Visa, Mastercard, JCB, Amex</span>
        </a>
    </div>`
    });
    document.querySelector('.button-twoprice').innerHTML = data;
}

render();

const saveToLocalStorage = () => {
    localStorage.setItem('products', JSON.stringify(productInCart));
};

const addToCart = (id) => {
    let checkProduct = productInCart.find((product) => product.id === id);

    if (!checkProduct) {
        let product = products.find((value) => value.id === id);
        productInCart.push({
            ...product,
            quantity: 1,
        });
        caculator();
        saveToLocalStorage();
        showCartNumber();

    } else {
        checkProduct.quantity += 1;
        caculator();
        saveToLocalStorage();
        showCartNumber();
    }
    
};
const caculator = () => {
    total.innerHTML = products.length;
};
const showCartNumber = () => {
    total.classList.toggle('close');
};
const changeColor = () => {
    for(let i = 0;i<scrolging_inner_right.children.length;i++){
        scrolging_inner_right.children[i].addEventListener('click',function(){
            for(let j = 0;j<scrolging_inner_right.children.length;j++){
                scrolging_inner_right.children[j].classList.remove('change-color');
            }
            this.classList.add('change-color');
        })
    }
    for(let i = 0;i<scrolging_inner_right2.children.length;i++){
        scrolging_inner_right2.children[i].addEventListener('click',function(){
            for(let j = 0;j<scrolging_inner_right2.children.length;j++){
                scrolging_inner_right2.children[j].classList.remove('change-color');
            }
            this.classList.add('change-color');
        })
    }
}
changeColor();

const closeCart = () => {
    if(dataProducts.length === 0){
        total.classList.add('close');
    }
};
closeCart();