//Div
var DivOne=document.getElementById('DivOne');   var DivTwo=document.getElementById('DivTwo');

//Rows
var row=0;

//Counter
var CounterT=document.getElementById('CounterTries');
var Counter=5;
CounterT.innerHTML="Tries left: "+Counter;
console.log(Counter);

//Buttons
var CheckBtn=document.getElementById('CheckBtn');

for(i=0;i<=4;i++){
    for(j=0;j<=4;j++){
        var btn=document.createElement("BUTTON");
        DivTwo.appendChild(btn);
        btn.id="row"+i+"btn"+j;
        btn.innerHTML=j;
        btn.style.backgroundColor="red";
    };
};