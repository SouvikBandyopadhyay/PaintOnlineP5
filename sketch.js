var buttonlist=[];
var flag=false;
var inscreen=false; 
var currcol;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  buttonlist.push(new Button(50,50,color(255,255,20)));
  buttonlist.push(new Button(50,100,color(255,0,0)));
  buttonlist.push(new Button(50,150,color(0,255,0)));
  buttonlist.push(new Button(50,200,color(0,0,255)));
  buttonlist.push(new Button(50,250,color(255,255,255)));
  buttonlist.push(new Button(50,300,color(0,0,0)));
  for(i=0;i<buttonlist.length;i++){
    buttonlist[i].display();
  }
  currcol=color(255,100,100);
}

function draw() {
  if(mouseX<100){
    inscreen=false;
  }
  else{
    inscreen=true
  }
  if(mouseIsPressed && inscreen){
    fill(currcol);
    noStroke();
    ellipse(mouseX,mouseY,40);
  }
  
}



function mouseClicked(){
  for(i=0;i<buttonlist.length;i++){
    var col1=buttonlist[i].clicked();
    if(col1!=undefined){
      console.log(col1);
      currcol=col1;
      break;
    }
  }
}

