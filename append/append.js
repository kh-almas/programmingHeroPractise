const header = document.getElementById('header');
header.innerText = 'text comes from js';

const list = document.getElementById('list');
const createItem = document.createElement('li');
createItem.innerText = 'list item comes from js';
list.appendChild(createItem);


const mainContainer = document.getElementById('mainContainer');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'section title';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'first li';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'second li';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'third li';
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);



//set html directly
const anotherSection = document.createElement('section');
anotherSection.innerHTML = `<h1>another section title</h1><ul><li>first li</li><li>second li</li><li>third li</li></ul>`

mainContainer.appendChild(anotherSection);
