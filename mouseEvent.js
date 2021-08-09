// import throttle from './throttle.js'
let mouseMoveStartPosi = {
    y:0
}
function onmousedowns(event){
  mouseMoveStartPosi.y = event.clientY
}
function onmousemoves(event){
    console.log(event,event.clientY)
    document.getElementsByClassName("g1")[0].style.transform="translate("+ "102px"+"," + (event.clientY-5) + "px"+")";
    initData[0].initCover = event.clientY-5;
    document.getElementsByClassName('line1')[0].setAttribute("y2",initData[0].initCover);
  }