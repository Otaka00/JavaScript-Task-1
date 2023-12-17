let level = 1;
let identicalLocations = [];
let differentLocation;

function getRandomLocation() {
    return Math.floor(Math.random() * 500);
}

function createImages() {
    const leftHalf = document.getElementById('leftHalf');
    const rightHalf = document.getElementById('rightHalf');

    leftHalf.innerHTML = '';
    rightHalf.innerHTML = '';

    // Generate new random locations for different images
    identicalLocations = [];
    for (let i = 0; i < level; i++) {
        identicalLocations.push(getRandomLocation());
    }

    // Generate a new random location for the different image
    differentLocation = getRandomLocation();

    // Create different image at the new random location
    const imgRight1 = createImage("image.jpg", () => checkClick('right', differentLocation));
    imgRight1.style.position = "absolute";
    imgRight1.style.top = differentLocation + "px";
    imgRight1.style.right = differentLocation + "px";
    imgRight1.style.bottom = differentLocation + "px";
    rightHalf.appendChild(imgRight1);

    // Create identical images at new random locations
    for (const location of identicalLocations) {
        const imgRight0 = createImage("image.jpg", () => checkClick('right', location));
        imgRight0.style.position = "absolute";
        imgRight0.style.top = location + "px";
        rightHalf.appendChild(imgRight0);

        const imgLeft0 = createImage("image.jpg", () => checkClick('left', location));
        imgLeft0.style.position = "absolute";
        imgLeft0.style.top = location + "px";
        leftHalf.appendChild(imgLeft0);
    }
}

function createImage(src, clickHandler) {
    const img = document.createElement('img');
    img.src = src;
    img.addEventListener('click', clickHandler);
    return img;
}

function checkClick(location, clickedLocation) {
    if (location === 'right' && clickedLocation === differentLocation) {
        level++;
        console.log(differentLocation);
        alert(`You win, you've found the difference. Move to level ${level}!`);
        createImages();
    } else {
        alert(`Game Over! You clicked on the identical image.`);
        level = 1;
        createImages(); // Restart the game
    }
}

// Initial setup
createImages();
