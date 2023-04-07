const contactPage = () => {
    const contentDiv = document.querySelector('#content');

    const title = document.createElement('h1');
    title.textContent = 'Contact:';
    const descriptionContainer = document.createElement('div');
    const address = document.createElement('div');
    address.classList.add('details');
    address.textContent = '47 beer st';

    const phone = document.createElement('div');
    phone.classList.add('details');
    phone.textContent = '47-47-47';

    contentDiv.appendChild(title);
    contentDiv.appendChild(descriptionContainer);
    contentDiv.appendChild(address);
    contentDiv.appendChild(phone);
};

export default contactPage;
