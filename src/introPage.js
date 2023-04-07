import porterImage from './porterImage.jpeg';

const introPage = () => {
    const contentDiv = document.querySelector('#content');

    const title = document.createElement('h1');
    title.textContent = "OP's Only Porter Brewery";
    const description = document.createElement('div');
    description.textContent = 'come down and have a porter why not';
    const beerImage = document.createElement('img');

    beerImage.src = porterImage;
    contentDiv.appendChild(title);
    contentDiv.appendChild(description);
    contentDiv.appendChild(beerImage);
};

export default introPage;
