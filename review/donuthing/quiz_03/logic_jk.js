// 동전통 정의
const moneyBox = [0];

//  상품 정의
const productList = {
    "top" : 1500,
    "doubleshot" : 2000,
    "evian" : 3000,
    "coke" : 1200,
    "Budvar" : 2500,
    "pearjuice" : 1800
}

// 코인을 넣으면 동전통에 금액 추가
function insertCoins (price) {
moneyBox.push(price);
console.log(moneyBox);
//잔액 표시 
dpBalance();
//구매가능 상품 표시
priceChk();
}

//현재 금액 표시
function dpBalance() {
    // 동전통 합계 구하기
    var sum = 
    moneyBox.reduce((acc, cur, i) => {return acc+cur;});
    console.log('합계금액: '+ sum);
    // 화면에 잔액 표시
    var result = document.getElementById("balance");
    result.innerText = sum+' 원';
}
//가격 체크 후 가능 상품 활성화
function priceChk() {
    //현재 투입된 금액 체크 후 정의 :'sum'
    var sum = 
    moneyBox.reduce((acc, cur, i) => {return acc+cur;});
    console.log(sum);
    // 상품명 & 가격 체크
    for (var i in productList) {
        console.log("상품:" + i + " 가격:" + productList[i]);
        // 투입된 금액 별 조건 설정
        var target = document.getElementById(i);
        if (productList[i] <= sum ) {
            console.log("가능");
            target.disabled = false;
            target.style.color="blue";
        } else {
            target.disabled = true;
            target.style.color="red";
        }
    }
}
 
function reset() {
    moneyBox.length = 1 ;
    console.log(moneyBox);
    for (var i in productList)
    {var target = document.getElementById(i);
    target.style = "none";
    target.disabled = true;}
    document.getElementById("balance").innerText = "0 원";
}