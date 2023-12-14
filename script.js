// let level = 1;
// let differentLocation = getRandomLocation();

// function getRandomLocation() {
//     return Math.floor(Math.random() * 500);
// }

// function createImages() {
//     const leftHalf = document.getElementById('leftHalf');
//     const rightHalf = document.getElementById('rightHalf');

//     leftHalf.innerHTML = '';
//     rightHalf.innerHTML = '';

//     // Generate random locations for identical images (left and right)
//     const identicalLocation = getRandomLocation();

//     console.log(identicalLocation);

//     // Identical images at random locations
//     const imgLeft0 = createImage("image.jpg", () => checkClick('left', identicalLocation));
//     leftHalf.appendChild(imgLeft0);

//     const imgRight0 = createImage("image.jpg", () => checkClick('right', identicalLocation));
//     rightHalf.appendChild(imgRight0);

//     // Generate random location for the different image (right)
//     console.log(differentLocation);

//     // Different image at random location
//     for(let i = 0; i < level; i++){

//     const imgRight1 = createImage("image.jpg", () => checkClick('right', differentLocation));
//     imgRight1.style.position = "absolute";
//     imgRight1.style.top = differentLocation + "px";
//     rightHalf.appendChild(imgRight1);
//     }
    
// }

// function createImage(src, clickHandler) {
//     const img = document.createElement('img');
//     img.src = src;
//     img.addEventListener('click', clickHandler);
//     return img;
// }

// function checkClick(location, differentLoc) {
//     if (location === 'right' && differentLoc === differentLocation) {
//         level++;
//         differentLocation = getRandomLocation(); // Update differentLocation for the next click
//         createImages();
//         alert(`You win! You've found the different image. Move to level ${level}!`);
//     } else {
//         alert(`Game Over! You clicked on the identical image.`);
//         level = 1;
//     }
// }

// // Initial setup
// createImages();

let level = 1;
let differentLocations = []; // Use an array to store multiple different locations

function getRandomLocation() {
    return Math.floor(Math.random() * 300 );
}

function createImages() {
    const leftHalf = document.getElementById('leftHalf');
    const rightHalf = document.getElementById('rightHalf');

    leftHalf.innerHTML = '';
    rightHalf.innerHTML = '';

    // Generate random locations for identical images (left and right)
    const identicalLocation = getRandomLocation();

    console.log(identicalLocation);

    // Identical images at random locations
    const imgLeft0 = createImage("image.jpg", () => checkClick('left', identicalLocation));
    leftHalf.appendChild(imgLeft0);

    const imgRight0 = createImage("image.jpg", () => checkClick('right', identicalLocation));
    rightHalf.appendChild(imgRight0);

    // Generate new random locations for different images
    differentLocations = [];
    for (let i = 0; i < level; i++) {
        differentLocations.push(getRandomLocation());
    }

    // Create different images at new random locations
    for (const location of differentLocations) {
        const imgRight = createImage("image.jpg", () => checkClick('right', location));
        imgRight.style.position = "absolute";
        imgRight.style.top = location + "px";
        imgRight.style.right = location + "px";
        rightHalf.appendChild(imgRight);
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

