//1.
let container = document.getElementById('container');
//2.
const container1 = document.querySelector('#container');
//3.
const items = document.querySelectorAll('.second');
console.log(items);
//4.
const item = document.querySelector('#container ol .third');
console.log(item);
//5.
container.innerHTML="Hello!"+container.innerHTML;
//6.
let footer = document.querySelector('.footer');
footer.classList.add("main");
console.log(footer);
//7.
footer.classList.remove("main");
console.log(footer);
//8.
let newDiv=document.createElement('li');
//9.
newDiv.innerHTML="four";
//10.
let ul=document.querySelector('ul');
ul.appendChild(newDiv);
//12.
let ol = document.querySelector('ol')
let items1 = ol.getElementsByTagName("li");
for (let i = 0; i < items1.length; ++i) {
  items1[i].style.backgroundColor="green";
}
//13.
footer.parentNode.removeChild(footer);
