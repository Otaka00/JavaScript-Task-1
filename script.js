let level = 1;
let differentLocations = []; // Use an array to store multiple different locations
let identicalLocations = [];
function getRandomLocation() {
    return Math.floor(Math.random() * 500 );
}

function createImages() {
    const leftHalf = document.getElementById('leftHalf');
    const rightHalf = document.getElementById('rightHalf');

    leftHalf.innerHTML = '';
    rightHalf.innerHTML = '';

    // Generate random locations for identical images (left and right)
    const identicalLocation = getRandomLocation();

    differentLocations = [];
    identicalLocations = [];
    for (let i = 0; i < level; i++) {
        differentLocations.push(getRandomLocation());
        identicalLocations.push(getRandomLocation());
    }

    // Create different images at new random locations
    for (const location of differentLocations) {
        const imgRight1 = createImage("image.jpg", () => checkClick('right', location));
        imgRight1.style.position = "absolute";
        imgRight1.style.top = location + "px";
        imgRight1.style.right = location + "px";
        rightHalf.appendChild(imgRight1);
    }
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

function checkClick(location, differentLoc) {
    if (location === 'right' && differentLocations.includes(differentLoc)) {
        level++;
        // alert(`You win, you've found the difference. Move to level ${level}!`);
        createImages();
    } else {
        alert(`Game Over! You clicked on the identical image.`);
        level = 1;
        createImages(); // Restart the game
    }
}

// Initial setup
createImages();

