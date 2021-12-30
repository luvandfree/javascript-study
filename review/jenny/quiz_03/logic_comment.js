var coin = 0;
document.getElementById('balance').innerHTML = coin + '원';
// 현재 잔액 확인해주는 것. 현재 코인 값이 html에 찍히게 함.

// 현재 금액에 따라 제품 색상 변하게 해주는 함수
function color_change() {
  // 만약 3천원 이상 들어있으면 모든 제품 다 구매 가능하니 전부 파란색으로 변경
  if (coin >= 3000) {
    document.getElementById('top').style.color = 'blue';
    top_btn.disabled = false;
    document.getElementById('doubleshot').style.color = 'blue';
    doubleshot.disabled = false;
    document.getElementById('evian').style.color = 'blue';
    evian.disabled = false;
    document.getElementById('coke').style.color = 'blue';
    coke.disabled = false;
    document.getElementById('Budvar').style.color = 'blue';
    Budvar.disabled = false;
    document.getElementById('pearjuice').style.color = 'blue';
    pearjuice.disabled = false;
  } else if (coin >= 2500) {
    document.getElementById('top').style.color = 'blue';
    top_btn.disabled = false;
    document.getElementById('doubleshot').style.color = 'blue';
    doubleshot.disabled = false;
    document.getElementById('coke').style.color = 'blue';
    coke.disabled = false;
    document.getElementById('Budvar').style.color = 'blue';
    Budvar.disabled = false;
    document.getElementById('pearjuice').style.color = 'blue';
    pearjuice.disabled = false;
  } else if (coin >= 2000) {
    document.getElementById('top').style.color = 'blue';
    top_btn.disabled = false;
    document.getElementById('doubleshot').style.color = 'blue';
    doubleshot.disabled = false;
    document.getElementById('coke').style.color = 'blue';
    coke.disabled = false;
    document.getElementById('pearjuice').style.color = 'blue';
    pearjuice.disabled = false;
  } else if (coin >= 1800) {
    document.getElementById('top').style.color = 'blue';
    top_btn.disabled = false;
    document.getElementById('coke').style.color = 'blue';
    coke.disabled = false;
    document.getElementById('pearjuice').style.color = 'blue';
    pearjuice.disabled = false;
  } else if (coin >= 1500) {
    document.getElementById('top').style.color = 'blue';
    top_btn.disabled = false;
    document.getElementById('coke').style.color = 'blue';
    coke.disabled = false;
  } else if (coin >= 1200) {
    document.getElementById('coke').style.color = 'blue';
    coke.disabled = false;
  }
}

// coin 5000을 클릭하면 현재 금액에 5천원 추가됨
function click_coin5000() {
  coin = coin + 5000;
  color_change();
  document.getElementById('balance').innerHTML = coin + '원';
}
function click_coin1000() {
  coin += 1000;
  color_change();
  document.getElementById('balance').innerHTML = coin + '원';
}
function click_coin500() {
  coin += 500;
  color_change();
  document.getElementById('balance').innerHTML = coin + '원';
}
function click_coin100() {
  coin += 100;
  color_change();
  document.getElementById('balance').innerHTML = coin + '원';
}
function click_top() {
  if (coin < 1500) {
    top_btn.disabled = true;
    document.getElementById('top').style.color = 'red';
  } else {
    coin -= 1500;
    document.getElementById('balance').innerHTML = coin + '원';
    {if (coin < 1500) {
      top_btn.disabled = true;
      document.getElementById('top').style.color = 'red';
      evian.disabled = true;
      document.getElementById('evian').style.color = 'red';
      doubleshot.disabled = true;
      document.getElementById('doubleshot').style.color = 'red';
      pearjuice.disabled = true;
      document.getElementById('pearjuice').style.color = 'red';
      Budvar.disabled = true;
      document.getElementById('Budvar').style.color = 'red';
    }}
  }
}
function click_doubleshot() {
  if (coin < 2000) {
    doubleshot.disabled = true;
    document.getElementById('doubleshot').style.color = 'red';
  } else {
    coin -= 2000;
    document.getElementById('balance').innerHTML = coin + '원';
    {if (coin < 2000) {
      doubleshot.disabled = true;
      document.getElementById('doubleshot').style.color = 'red';
      evian.disabled = true;
      document.getElementById('evian').style.color = 'red';
      pearjuice.disabled = true;
      document.getElementById('pearjuice').style.color = 'red';
      Budvar.disabled = true;
      document.getElementById('Budvar').style.color = 'red';
    }}
  }
}
function click_evian() {
  if (coin < 3000) {
    evian.disabled = true;
    document.getElementById('evian').style.color = 'red';
  } else {
    coin -= 3000;
    document.getElementById('balance').innerHTML = coin + '원';
    {if (coin < 3000) {evian.disabled = true;
      document.getElementById('evian').style.color = 'red';
    }}
  }
}
function click_coke() {
  if (coin < 1200) {
    coke.disabled = true;
    document.getElementById('coke').style.color = 'red';
  } else {
    coin -= 1200;
    document.getElementById('balance').innerHTML = coin + '원';
    {if (coin < 1200) {
      coke.disabled = true;
      document.getElementById('coke').style.color = 'red';
      top_btn.disabled = true;
      document.getElementById('top').style.color = 'red';
      evian.disabled = true;
      document.getElementById('evian').style.color = 'red';
      doubleshot.disabled = true;
      document.getElementById('doubleshot').style.color = 'red';
      pearjuice.disabled = true;
      document.getElementById('pearjuice').style.color = 'red';
      Budvar.disabled = true;
      document.getElementById('Budvar').style.color = 'red';
    }}
  }
}
function click_Budvar() {
  if (coin < 2500) {
    coke.disabled = true;
    document.getElementById('Budvar').style.color = 'red';
  } else {
    coin -= 2500;
    document.getElementById('balance').innerHTML = coin + '원';
    {if (coin < 2500) {
      Budvar.disabled = true;
      document.getElementById('Budvar').style.color = 'red';
      evian.disabled = true;
      document.getElementById('evian').style.color = 'red';
    }}
  }
}
function click_pearjuice() {
  if (coin < 1800) {
    pearjuice.disabled = true;
    document.getElementById('pearjuice').style.color = 'red';
  } else {
    coin -= 1800;
    document.getElementById('balance').innerHTML = coin + '원';
    {if (coin < 1800) {
      pearjuice.disabled = true;
      document.getElementById('pearjuice').style.color = 'red';
      evian.disabled = true;
      document.getElementById('evian').style.color = 'red';
      doubleshot.disabled = true;
      document.getElementById('doubleshot').style.color = 'red';
      Budvar.disabled = true;
      document.getElementById('Budvar').style.color = 'red';
    }}
  }
}
const coin5000 = document.getElementById('coin5000');
coin5000.addEventListener('click', click_coin5000);

const coin1000 = document.getElementById('coin1000');
coin1000.addEventListener('click', click_coin1000);

const coin500 = document.getElementById('coin500');
coin500.addEventListener('click', click_coin500);

const coin100 = document.getElementById('coin100');
coin100.addEventListener('click', click_coin100);

const top_btn = document.getElementById('top');
top_btn.addEventListener('click', click_top);

const doubleshot = document.getElementById('doubleshot');
doubleshot.addEventListener('click', click_doubleshot);

const evian = document.getElementById('evian');
evian.addEventListener('click', click_evian);

const coke = document.getElementById('coke');
coke.addEventListener('click', click_coke);

const Budvar = document.getElementById('Budvar');
Budvar.addEventListener('click', click_Budvar);

const pearjuice = document.getElementById('pearjuice');
pearjuice.addEventListener('click', click_pearjuice);
