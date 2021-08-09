function throttle(fn,delay){
    let time = null
  return function(){
      let _this = this
      let args = arguments
      if(!time){
        time = setTimeout(()=>{
          fn.apply(_this)
          time = null
          clearTimeout(time)
      },delay)
    } return;
    
  }
}