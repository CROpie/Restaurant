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
// removing contentDiv also deletes the associated class(s)
// this is handy because each page can set its own class for css purposes
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
button1.textContent = 'Welcome';
button1.addEventListener('click', selectIntroPage);
button1.classList.add('header-button');
headerDiv.appendChild(button1);

const button2 = document.createElement('button');
button2.textContent = 'Beer Selection';
button2.addEventListener('click', selectSelectionPage);
button2.classList.add('header-button');
headerDiv.appendChild(button2);

const button3 = document.createElement('button');
button3.textContent = 'Contact Us';
button3.addEventListener('click', selectContactPage);
button3.classList.add('header-button');
headerDiv.appendChild(button3);

/* figure out how to do Footer properly...

const footerDiv = document.createElement('div');
footerDiv.setAttribute('id', 'footer');
body.appendChild(footerDiv);
footerDiv.textContent = 'No copywrite 2023 OP Only Porters';
*/

selectIntroPage();
