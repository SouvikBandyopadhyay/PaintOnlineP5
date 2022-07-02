
class Button{
    constructor(xval,yval,colval){
     this.x=xval;
     this.y=yval;
     this.size=40;
     this.col=colval;
    }
    display=function(){
     fill(this.col);
     ellipse(this.x,this.y,this.size);
    }
    clicked=function(){
     let d=dist(mouseX,mouseY,this.x,this.y)
     if(d<=(this.size/2)+2){
       return this.col;
     }
    }
   }
   