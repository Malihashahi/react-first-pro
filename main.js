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