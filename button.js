"use strict";
function yearI(){
    document.getElementById("YearOneTable").style.display = "block";
    document.getElementById("YearTwoTable").style.display = "none";
    document.getElementById("YearThreeTable").style.display = "none"; 
    const myBtn1 = document.getElementById('btn1');
        myBtn1.style.borderBottom = "3px solid #3a3089";
        myBtn1.style.backgroundColor = "#d6d1ff";
        myBtn1.style.color = "#fff";
    const myBtn2 = document.getElementById('btn2');
        myBtn2.style.borderBottom = "none";
        myBtn2.style.backgroundColor = "";
        myBtn2.style.color = "#3a3089";
    const myBtn3 = document.getElementById('btn3');
        myBtn3.style.borderBottom = "none";
        myBtn3.style.backgroundColor = "";    
        myBtn3.style.color = "#3a3089";
}
function yearII(){
    document.getElementById("YearOneTable").style.display = "none";
    document.getElementById("YearTwoTable").style.display = "block";
    document.getElementById("YearThreeTable").style.display = "none";    
    const myBtn1 = document.getElementById('btn1');
        myBtn1.style.borderBottom = "none";
        myBtn1.style.backgroundColor = "";
        myBtn1.style.color = "#3a3089";
    const myBtn2 = document.getElementById('btn2');
        myBtn2.style.borderBottom = "3px solid #3a3089";
        myBtn2.style.backgroundColor = "#d6d1ff";
        myBtn2.style.color = "#fff";
    const myBtn3 = document.getElementById('btn3');
        myBtn3.style.borderBottom = "none";
        myBtn3.style.backgroundColor = "";
        myBtn3.style.color = "#3a3089";
}
function yearIII(){
    document.getElementById("YearOneTable").style.display = "none";
    document.getElementById("YearTwoTable").style.display = "none";
    document.getElementById("YearThreeTable").style.display = "block";    
    const myBtn1 = document.getElementById('btn1');
        myBtn1.style.borderBottom = "";
        myBtn1.style.backgroundColor = "";
        myBtn1.style.color = "#3a3089";
    const myBtn2 = document.getElementById('btn2');
        myBtn2.style.borderBottom = "none";
        myBtn2.style.backgroundColor = "";
        myBtn2.style.color = "#3a3089";
    const myBtn3 = document.getElementById('btn3');
        myBtn3.style.borderBottom = "3px solid #3a3089";
        myBtn3.style.backgroundColor = "#d6d1ff";
        myBtn3.style.color = "#fff";
}



function mode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}