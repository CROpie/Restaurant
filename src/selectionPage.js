const selectionPage = () => {
    const contentDiv = document.querySelector('#content');

    const title = document.createElement('h1');
    title.textContent = 'Check out these beers';

    const beer1 = document.createElement('div');
    beer1.textContent = 'Beer 1';

    const beer2 = document.createElement('div');
    beer2.textContent = 'Beer 2';

    const beer3 = document.createElement('div');
    beer3.textContent = 'Beer 3';

    contentDiv.appendChild(title);
    contentDiv.appendChild(beer1);
    contentDiv.appendChild(beer2);
    contentDiv.appendChild(beer3);
};

export default selectionPage;
