function importAll(directory) {
    const images = [];
    directory.keys().forEach((image, index) => {
        const newImage = {};
        newImage.name = image.slice(7, -4); // removes ./beer_ and .png - wont work with .jpeg
        newImage.url = directory(image);
        newImage.price = '600yen'; // set a default price
        newImage.text =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        images[index] = newImage;
    });
    return images;
}

// modified https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
const selectionPage = () => {
    const images = importAll(
        require.context('./beerImages', false, /\.(png|jpe?g|svg)$/)
    );

    // Change the prices of the beers from the default of 600, have to do it manually?
    // Could make an array of prices then add them in, but probably less clear.
    // Alternatively the image filename could be beername_price.png then use slice to get the data
    images[1].price = '500yen';
    images[2].price = '800yen';

    const setUpElement = (elementType, classType, dataName) => {
        const newElement = document.createElement(`${elementType}`);
        newElement.classList.add(`${classType}`);
        newElement.textContent = dataName;
        return newElement;
    };

    const contentDiv = document.querySelector('#content');
    contentDiv.classList.add('selection-page');

    const title = document.createElement('h1');
    title.setAttribute('id', 'selection-title');
    title.textContent = 'Check out these beers';
    contentDiv.appendChild(title);

    const beerContainer = document.createElement('div');
    beerContainer.setAttribute('id', 'beer-container');
    contentDiv.appendChild(beerContainer);

    images.forEach((image) => {
        const beerDiv = document.createElement('div');
        beerContainer.appendChild(beerDiv);

        const beerTitle = setUpElement('div', 'beer-title', image.name);
        beerDiv.appendChild(beerTitle);

        const newImage = document.createElement('img');
        newImage.classList.add('beer-image');
        newImage.src = image.url;
        beerDiv.appendChild(newImage);

        beerDiv.appendChild(setUpElement('div', 'beer-price', image.price));
        beerDiv.appendChild(setUpElement('div', 'beer-text', image.text));
    });
};

export default selectionPage;
