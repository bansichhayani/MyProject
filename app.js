//Function

var openImg = document.getElementById('open');
var closedImg = document.getElementById('close');

closedImg.addEventListener('click', onClosedImage);
openImg.addEventListener('click', onOpenImage);
 
function onOpenImage() {
    console.log("open image has been click");

    if(openImg.classList.contains('openImageClass')){
        openImg.classList.remove('active');
        closedImg.classList.add('active');
    }
}

function onClosedImage() {
    console.log("close image has been click"); 

    if(closedImg.classList.contains('closeImageClass')){
        closedImg.classList.remove('active');
        openImg.classList.add('active');
    }
}

function onDollarChange() {
    var dollar = di.value;
    var inr = 80*dollar;

    inrTag.value = inr;
}

var inrTag = document.getElementById('inInput');
var di = document.getElementById('dollarInput');

di.addEventListener('input',onDollarChange);
inrTag.addEventListener('input',onInrChange);

function onInrChange() {
    var inrs = inrTag.value;
    var usd = inrs/80;

    di.value = usd;
}

//Timer used

function displayMyName () {
    console.log("Bansi");
}

setInterval(displayMyName, 2000);

function displayDate() {
    var date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hour = document.getElementById('hours');
    hour.innerText = hh;

    let minutes = document.getElementById('min');
    minutes.innerText = mm;

    let seconds = document.getElementById('sec');
    seconds.innerText = ss;
}

setInterval(displayDate, 1000);

// If & Else condition Example

function onbuttonClick(){

    var number = document.getElementById('pno').value;
    var i = 2;

    if(number == 1){
        document.getElementById('pmsg').innerText = "This is neither prime nor compiste number";
    }
    else if(number < 1){
        document.getElementById('pmsg').innerText = "This is not a prime number";
    }
    else if(number%2 == 0){
        document.getElementById('pmsg').innerText = "This is not a prime number";
    }
    else{
        document.getElementById('pmsg').innerText = "This is a prime number";
    }
}
 
function checkAge(){
    var age = document.getElementById('ano').value;
    var i = 18;

    if(age>=18){
        document.getElementById('amsg').innerText ="you can vote";
    }
    else{
        document.getElementById('amsg').innerText ="you can not vote";
    }
}
//Switch case Example

function onCalc() {
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let operator = document.getElementById('op').value;

    switch(operator){
        case '+' :   
        let sum = parseInt(number1) + parseInt(number2); 
            document.getElementById('ans').value = sum;
            break;
        case '-' :   
            let diff = parseInt(number1) - parseInt(number2); 
            document.getElementById('ans').value = diff;
            break;
        case '*' :   
            let mul = parseInt(number1) * parseInt(number2); 
            document.getElementById('ans').value = mul;
            break;
        case '/' :   
            let div = parseInt(number1) / parseInt(number2); 
            document.getElementById('ans').value = div;
            break;
    }
}
//for loop Example

for(var i=0;i<=5;i++){
    
    for(var j=0;j<=i;j++){
        document.write("* ");
    }
    document.write("<br>");
}

for(var i=0;i<=5;i++){
    
    for(var j=i;j<=5;j++){
        document.write("* ");
    }
    document.write("<br>");
}

//Array

let cities = ["Rajkot","Goa","Mumbai","Pune","Delhi","Leh","Sikkim","Punjab","Kochi","Rajsthan"];
console.log(cities);

let city = cities[5];
console.log(city);

cities.push("Ladakh");
console.log(cities);

let type = typeof(cities);
console.log(type);

Array.isArray(cities);

cities.pop();
console.log(cities);

let city1 = cities.pop();
console.log(city1);

console.log(cities);

var c1 = cities.slice(3,5);
console.log(c1);

let index = cities.indexOf("Leh");
console.log(index);

let check = cities.includes("Sikkim");
console.log(check);

cities.reverse();
console.log(cities);

var splice = cities.splice(2,2);
console.log(splice);

console.log(cities);

// How to get alue from Array

let simpleArray = [12,34,56,78,90,100,234,567];

for(let i=0; i < simpleArray.length; i++){
    let value = simpleArray[i];
    console.log(value);
}

//Math Function

var minNum = Math.min(...simpleArray);
console.log(minNum); 

var maxNum = Math.max(...simpleArray);
console.log(maxNum);

var randomNum = Math.random();
console.log(randomNum);

let randomNumber = (randomNum*100);
console.log(randomNumber);

let floorNum = Math.floor(randomNumber);
console.log(floorNum);

//JavaScript Object Notification (JSON)

var user = {
    name: "Bansi",
    age: 29,
    city: "Rajkot",
}

alert(user.name);
alert(user.age);

user.hobby = true;

var restaurant = [
    {
        name: "La Pino'Z Pizza",
        costForTwo: 350,
        rating: 4,
        cusine: ["Pizzas","Pastas","Beverages","FastFood","Italian","Desserts"]
    },
    {
        name: "McDonald's",
        costForTwo: 400,
        rating: 4.1,
        cusine: ["Burgers","Beverages","Cafe","Desserts"]
    }
]

// Background Image Slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides fade");
    var dots = document.getElementsByClassName("dots");

    if(n > slides.length)
    { 
        slideIndex = 1;
    }
    if(n < 1)
    {
        slideIndex = slides.length;
    }
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace = ("active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";

}