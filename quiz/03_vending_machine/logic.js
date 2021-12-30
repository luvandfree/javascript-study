'use strict';

const productPrice = {
  top: 1500,
  doubleshot: 2000,
  evian: 3000,
  coke: 1200,
  budvar: 2500,
  pearjuice: 1800,
  coin5000: 5000,
};

const changeBalance = (coinPrice) => {
  // 현재금액을 계산
  const balance = document.querySelector('#balance');
  let currentPrice = parseInt(balance.textContent.split(' ')[0]) + coinPrice;

  // product의 상태를 변경
  changeProductsStatus(currentPrice);

  // 현재금액을 변경
  balance.textContent = `${currentPrice} 원`;
};

const changeProductsStatus = (currentPrice) => {
  const products = document.querySelectorAll('.product');
  // product의 id에 해당하는 제품의 금액이 현재 금액과 비교하여 상태를 변경
  products.forEach((element) => {
    const productId = element.getAttribute('id');
    if (currentPrice >= productPrice[productId]) {
      element.style.color = 'blue';
      element.disabled = false;
    } else {
      element.style.color = 'red';
      element.disabled = true;
    }
  });
};
