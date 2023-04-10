function importAll(directory) {
    const images = {};
    directory.keys().forEach((image) => {
        const newImage = {};
        newImage.name = image.slice(2, -4); // removes ./ and .jpg
        newImage.url = directory(image);
        images[newImage.name] = newImage;
    });
    console.log(images);
    return images;
}

const introPage = () => {
    const images = importAll(
        require.context('./welcomeImages', false, /\.(png|jpe?g|svg)$/)
    );

    const contentDiv = document.querySelector('#content');
    contentDiv.classList.add('introPage');

    const logo = document.createElement('img');
    logo.src = images.teddybear.url;
    logo.setAttribute('id', 'logo');
    contentDiv.appendChild(logo);

    const title = document.createElement('h1');
    title.textContent = "OP's Only Porter Brewery";
    title.classList.add('title');
    contentDiv.appendChild(title);

    const tagline = document.createElement('div');
    tagline.textContent = 'come down and have a porter why not';
    tagline.classList.add('tagline');
    contentDiv.appendChild(tagline);

    const infoContainer = document.createElement('div');
    infoContainer.setAttribute('id', 'info-container');
    contentDiv.appendChild(infoContainer);

    const atmospherePic0 = document.createElement('img');
    atmospherePic0.src = images.atmosphere1.url;
    atmospherePic0.classList.add('atmosphere-pic');
    infoContainer.appendChild(atmospherePic0);

    const description0 = document.createElement('div');
    description0.textContent =
        "Fresh from his kitchen in suburban Japan comes a range of beverages sure to tickle your fancy. Despite the name, beers other than porters are available! Strictly no sours though. Yuck. Each batch is hand-crafted on a 6L scale, with new beers appearing weekly. If you miss out on a good one, don't fret! I'm sure it will become available again at some stage, probably.";
    description0.classList.add('longtext');
    infoContainer.appendChild(description0);

    const description1 = document.createElement('div');
    description1.textContent =
        'Opening Hours:\nMon: 17:00-23:59\nTue: 17:00-23:59\nWed: Closed\nThu: Closed\nFri: 12:00-25:00\nSat: 12:00-late\nSun: 12:00-17:00';
    description1.classList.add('longtext');
    description1.classList.add('open-times');
    infoContainer.appendChild(description1);

    const atmospherePic1 = document.createElement('img');
    atmospherePic1.src = images.porterImage.url;
    atmospherePic1.classList.add('atmosphere-pic');
    infoContainer.appendChild(atmospherePic1);
};

export default introPage;
