

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
 