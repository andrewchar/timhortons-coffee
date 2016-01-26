var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/images/tims1.jpeg') {
      myImage.setAttribute ('src','images/tims2.jpeg');
    } else {
      myImage.setAttribute ('src','images/tims1.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Coffee is good stuff, ' + myName;
} if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Cofee is good stuff, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}