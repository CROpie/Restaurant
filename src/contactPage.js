import templateMap from './contactImages/templateMap.png';

const contactPage = () => {
    const contentDiv = document.querySelector('#content');
    contentDiv.classList.add('contact-page');

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    title.classList.add('contact-title');
    contentDiv.appendChild(title);

    const contactText = document.createElement('div');
    contactText.classList.add('longtext');
    contactText.textContent =
        'Please call, email, or fill out your details below to make a reservation. Walk-ins are possible, but if busy, there is plenty of space outside to loiter while you wait.';
    contentDiv.appendChild(contactText);

    // form ->
    const formContainer = document.createElement('div');
    formContainer.setAttribute('id', 'form-container');
    contentDiv.appendChild(formContainer);

    // name
    const inputDiv0 = document.createElement('div');
    inputDiv0.classList.add('input-div');
    formContainer.appendChild(inputDiv0);

    const nameTitle = document.createElement('div');
    nameTitle.classList.add('input-title');
    nameTitle.textContent = '*Name: ';
    inputDiv0.appendChild(nameTitle);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.classList.add('input');
    inputDiv0.appendChild(nameInput);

    // phone
    const inputDiv1 = document.createElement('div');
    inputDiv1.classList.add('input-div');
    formContainer.appendChild(inputDiv1);

    const phoneTitle = document.createElement('div');
    phoneTitle.classList.add('input-title');
    phoneTitle.textContent = '*Phone: ';
    inputDiv1.appendChild(phoneTitle);

    const phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'number');
    phoneInput.classList.add('input');
    inputDiv1.appendChild(phoneInput);

    // email
    const inputDiv2 = document.createElement('div');
    inputDiv2.classList.add('input-div');
    formContainer.appendChild(inputDiv2);

    const emailTitle = document.createElement('div');
    emailTitle.classList.add('input-title');
    emailTitle.textContent = '*Email: ';
    inputDiv2.appendChild(emailTitle);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.classList.add('input');
    inputDiv2.appendChild(emailInput);

    // request
    const inputDiv3 = document.createElement('div');
    inputDiv3.classList.add('input-div');
    formContainer.appendChild(inputDiv3);

    const requestTitle = document.createElement('div');
    requestTitle.classList.add('input-title');
    requestTitle.textContent = '*Expected Arrival ';
    inputDiv3.appendChild(requestTitle);

    const requestInput = document.createElement('input');
    emailInput.setAttribute('type', 'text');
    requestInput.setAttribute('placeholder', 'Date/Time');
    requestInput.classList.add('input');
    inputDiv3.appendChild(requestInput);

    // button
    const inputDiv4 = document.createElement('div');
    inputDiv4.classList.add('input-div');
    inputDiv4.classList.add('button-div');
    formContainer.appendChild(inputDiv4);

    const formButton = document.createElement('button');
    formButton.setAttribute('type', 'button');
    formButton.classList.add('input-button');
    formButton.textContent = 'Submit';
    inputDiv4.appendChild(formButton);

    // form <-

    const googleMap = document.createElement('img');
    googleMap.src = templateMap;
    googleMap.setAttribute('id', 'google-map');
    contentDiv.appendChild(googleMap);

    const descriptionContainer = document.createElement('div');
    contentDiv.appendChild(descriptionContainer);

    const address = document.createElement('div');
    address.classList.add('details');
    address.textContent = '47 beer st Antarctica';
    contentDiv.appendChild(address);

    const phone = document.createElement('div');
    phone.classList.add('details');
    phone.textContent = '1234-4747-6789';
    contentDiv.appendChild(phone);

    const email = document.createElement('div');
    email.classList.add('details');
    email.textContent = 'OP@OnlyPorters.com.ant';
    contentDiv.appendChild(email);
};

export default contactPage;
