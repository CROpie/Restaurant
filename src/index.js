import introPage from './introPage';
import selectionPage from './selectionPage';
import contactPage from './contactPage';
import './style.css';

const body = document.querySelector('body');

let contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');
body.appendChild(contentDiv);

const headerDiv = document.createElement('div');
headerDiv.setAttribute('id', 'header');
body.appendChild(headerDiv);

// remove then re-add contentDiv
const resetContentDiv = () => {
    const removeDiv = document.querySelector('#content');
    removeDiv.remove();
    contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'content');
    body.appendChild(contentDiv);
};

const selectIntroPage = () => {
    resetContentDiv();
    introPage();
};

const selectSelectionPage = () => {
    resetContentDiv();
    selectionPage();
};

const selectContactPage = () => {
    resetContentDiv();
    contactPage();
};

const button1 = document.createElement('button');
button1.textContent = 'Intro Page';
button1.addEventListener('click', selectIntroPage);
headerDiv.appendChild(button1);

const button2 = document.createElement('button');
button2.textContent = 'Selection Page';
button2.addEventListener('click', selectSelectionPage);
headerDiv.appendChild(button2);

const button3 = document.createElement('button');
button3.textContent = 'Contact Page';
button3.addEventListener('click', selectContactPage);
headerDiv.appendChild(button3);
