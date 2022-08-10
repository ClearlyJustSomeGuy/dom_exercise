const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const para = document.createElement('p');
para.textContent = 'Hey, I\'m red!';
para.style.color = 'red';
container.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';
container.appendChild(h3);

const div2 = document.createElement('div');
div2.classList.add('divclasstest');
div2.style.cssText = 'border: black solid 10px; background: pink;';

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';
const p2 = document.createElement('p');
p2.textContent = 'Me too';

div2.appendChild(h1);
div2.appendChild(p2);
container.appendChild(div2);
