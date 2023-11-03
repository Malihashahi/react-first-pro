class Reactangle {
 constructor(width,height){
   this.width= width
   this.height= height
 }
 render(){
    console.log(this.height,this.width)
 }
}
var obj =new Reactangle(10,20);



class  ColorReactangle extends Reactangle{
    constructor(width,height,color){
     super(width ,height)
     this.color=color

    }
    show(){
        return"<div style='width:"+this.width +"px;height:"+this.height +"px;background:"+this.color+"'></div>"
    }
}



var obj2= new ColorReactangle(200,100,"red");
document.getElementById("myDiv").innerHTML=obj2.show();

if(true){
  let y=3
  const z=7
  var x=2
}
function test(){
  console.log("in a funtion");
}
const test2 =(x,y)=>{
  console.log(x+y);

}


import mydefault, { testString ,testfun ,TestClass } from "./modul1.js";

console.log(testString);
console.log(testfun(5));
let obj3 = new TestClass("maliha shahi");

obj3.handleLog();
console.log(mydefault);






