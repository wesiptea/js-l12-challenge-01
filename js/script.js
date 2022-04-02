const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// connecting with API source and gathering data
const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    // .json() function allow you to manipulate the data retrieved from an API
    const images = await res.json();
    console.log(images);
    selectRandomImage(images);
};

// selecting a random image from the array of 100 items
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    // console.log(randomIndex);
    // text: "create a variable called randomImage...in the value, use randomIndex to grab a single image from your images array."
    const randomImage = images[randomIndex];
    // console.log(randomImage);
    // text: calling the displayImage variable and passing it the randomImage as its argument in order to dispay the random image selected
    displayImage(randomImage);
};

// displaying the randomly selected image onscreen - this function will be accepting the random image object - containing all of the properties for that object
const displayImage = function (randomImage) {
    // allows us to access the two properties desired: author and photo location/address online
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    // allows us to change the text of the authorSpan in html to author variable (name of photographer) and reveal info onscreen (removing "hide" from html)
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
    // the below call - getImage(); - ensures that the data is not retrieved until the button is clicked
    getImage();
});
