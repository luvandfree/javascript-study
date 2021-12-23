function LinksSetColor(color) {
  //     var alist = document.querySelectorAll('a');
  // var i = 0;
  // while(i < alist.length){
  // alist[i].style.color=color;
  // i = i + 1;
  // }  //ctrl+/를 하면 선택한 영역을 주석처리 할 수 있음
  $('a').css('color', color); //$라는 이름의 함수임. jQuery에서 사용. 모든 a태그를 jquery로 제어하겠다.
} //jQuery는 새로운 언어가 아님 css라는 함수를 우리 대신에 처리해주고 있는 것임.
var Body = {
  setColor: function (color) {
    //document.querySelector('body').style.color=color;
    $('body').css('color', color);
  }, //객체의 property 구분은 , 를 사용한다.
  setBackgroundColor: function (color) {
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor', color);
  },
};
var Links = {
  setColor: function (color) {
    //         var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    // alist[i].style.color=color;
    // i = i + 1;
    // }
    $('a').css('color', color);
  },
};
function BodySetColor(color) {
  //document.querySelector('body').style.color=color;
  $('body').css('color', color);
}
function BodySetBackgroundColor(color) {
  //document.querySelector('body').style.backgroundColor=color;
  $('body').css('backgroundColor', color);
}
function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'night') {
    BodySetBackgroundColor('black'); //Body.setBackgroundColor로 바꿔서 하니까 버튼이 동작을 안해요
    BodySetColor('white'); ////Body.setColor로 바꿔서 하니까 버튼이 동작을 안해요
    self.value = 'day';
    Links.setColor('white'); //color skyblue > white로 변경
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    LinksSetColor('blue');
  }
}
