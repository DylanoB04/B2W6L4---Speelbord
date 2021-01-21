var word=["k", "a", "a", "r", "t"];

//Input
var wordInput=document.getElementById('wordInput');
var checkLetter=document.getElementById('checkLetter');
var checkBtn=document.getElementById('checkBtn');

// Maak bovenstaand speelbord na in HTML en zorg ervoor dat je een woord van 5 letters kunt invoeren en ook 1 letter waar je op wilt controleren.
// Zorg ervoor dat je aangeeft op welke plaats de letter in het woord voorkomt. 
// In dit voorbeeld zet je op plaats 2 en 3 de letter a neer omdat in het woord 'kaart' er een a voorkomt op positie 2 en 3.

//Buttons
var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var btn3=document.getElementById('btn3');
var btn4=document.getElementById('btn4');
var btn5=document.getElementById('btn5');

btn2.innerHTML=word[1];
btn3.innerHTML=word[2];