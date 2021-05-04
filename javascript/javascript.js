'use strict';


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}




let donersArray = [];

function Doner(name, amount) {
  this.name = name;
  this.amount = amount;

  this.age = getRandomIntInclusive(18, 30);


  donersArray.push(this);
}



Doner.prototype.render = function () {
  let tr = document.createElement('tr');
  table.appendChild(tr);

  let td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.name;

  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.age;

  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.amount;

}





let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let amount = event.target.amount.value;
  amount = parseInt(amount);

  new Doner(name, amount);

  renderTable();
  saveToLS();

}

let table = document.getElementById('table');

function renderTable() {
  table.textContent = '';

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Donor Name';

  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Donor Age';

  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Amount';

  for (let i = 0; i < donersArray.length; i++) {

    donersArray[i].render();
  }
  renderFooter();
}


function saveToLS() {

  localStorage.setItem('doners', JSON.stringify(donersArray));
}

function getFromLS() {
  let savedDoners = localStorage.getItem('doners');
  savedDoners = JSON.parse(savedDoners);

  if (savedDoners) {
    for (let i = 0; i < savedDoners.length; i++) {
      let reInst = new Doner(savedDoners[i].name, savedDoners[i].amount);
    }
    renderTable();
  }
}

getFromLS();

function renderFooter(){
let total=0;
for(let i=0;i<donersArray.length;i++){
total=total+donersArray[i].amount;
}


let tr=document.createElement('tr');
table.appendChild(tr);

let th=document.createElement('th');
tr.appendChild(th);
th.setAttribute('colspan','3');

th.textContent=`Total : ${total}`;




}