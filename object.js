function dep (obj){
    Object.keys(obj).forEach(e=>{
        if(!isObject(obj[e])){
            observer(obj,e)
        }else if(isObject(obj[e])=== "ISOBJECT"){
            return dep(obj[e])
        }else{//数组处理
          alert("数组无法处理")
        }
    })
}
function observer(data,name){
   let _name = data[name];
   Object.defineProperty(data,name,{
       get(){
           return _name
       },set(newVal){
           _name = newVal
       }
   })
}
function isObject(data){
  if(Object.prototype.toString.call(data) =="[object Object]"){
      return "ISOBJECT"
  }else if(Array.isArray(data)){
      return "ISARRAY"
  }else{
      return false
  }
}