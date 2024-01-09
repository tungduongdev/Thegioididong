const dataProducts = JSON.parse(localStorage.getItem('products'));
const total = document.getElementById('total');
const caculator = () => {
    total.innerHTML = dataProducts.length;
};
caculator();

const calculateTotal = (quantity, price) => {

    return quantity * price;
}

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

const renderProduct = () => {
    let data = ``;
    dataProducts.map((value,index) => {
        data +=
        `
        <ul class="listing-cart">
                    <li>
                        <div class="infor">
                            <img width="75px" src="${value.image}" alt="">
                            <a href="#" class="product-name">${value.name}<br>
                            <span class="price">${value.price}</span>
                        </div>
                        <div class="choose-color">
                            <span class="delete" onclick = "deleteProduct(${index})"><i class="fa-solid fa-trash-can"></i>Xoá</span>
                            <div class="choose-number">
                                <div onclick="minusQuantity(${index})" class="minus"><i class="fa-solid fa-minus"></i></div>
                                <input type="text" value="${value.quantity}">
                                <div onclick="plusQuantity(${index})" class="plus"><i class="fa-solid fa-plus"></i></div>
                            </div>
                        </div>
                    </li>
                    <div class="total-money">
                        <span>Tạm tính(${value.quantity} sản phẩm): </span>
                       
                        <span>${VND.format(calculateTotal(value.quantity, value.price))}</span>
                    </div>
                    <div class="agree">
                        <span><i class="fa-solid fa-square-check"></i>Tôi đồng ý với Chính sách xử lý dữ liệu cá nhân của Thế Giới Di Động</span>
                    </div>
                    <button class="buy">ĐẶT HÀNG</button>
                    
                </ul>
        `
    });
    document.querySelector('.middleCart').innerHTML = data;
};
const plusQuantity = (index) => {
    dataProducts[index].quantity++;
    localStorage.setItem('products', JSON.stringify(dataProducts));
    renderProduct();
    if(dataProducts[index].quantity > 10){
        alert('Số lượng sản phẩm tối đa là 10');
        dataProducts[index].quantity = 10;
        localStorage.setItem('products', JSON.stringify(dataProducts));
        renderProduct();
    }
};
const minusQuantity = (index) => {
    dataProducts[index].quantity--;
    localStorage.setItem('products', JSON.stringify(dataProducts));
    renderProduct();
    if(dataProducts[index].quantity < 1){
        dataProducts.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(dataProducts));
        renderProduct();
        renderEmptyCart();
    }
};
const deleteProduct = (index) => {
    dataProducts.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(dataProducts));
    Caculator();
    renderProduct();
    renderEmptyCart();
};
renderProduct();
const closeCart = () => {
    if(dataProducts.length === 0){
        total.classList.add('close');
    }
};
closeCart();
const renderEmptyCart = () => {
    const emptyCart = document.querySelector('#cart');
    if(dataProducts.length === 0){
        emptyCart.innerHTML = `<div class="noproincart">
        <i class="fa-solid fa-cart-plus"></i>
        <p class="no-product">Không có sản phẩm nào trong giỏ hàng</p>
        <a href="/html/index.html">về trang chủ</a>
        <p class="contact">Khi cần trợ giúp vui lòng gọi <span>1900 232 460</span> hoặc <span>0376623832</span> (7h30 - 22h)</p>
    </div>`
    }
};

renderEmptyCart();
const Caculator = () => {
    total.classList.add('hidden');   
};