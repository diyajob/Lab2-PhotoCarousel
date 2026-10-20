
let images = [
"image/image1.jpg",
"image/image2.jpg",
"image/image3.jpg"
];

let imageElements = [
    document.getElementById("image1"),
    document.getElementById("image2"),
    document.getElementById("image3")
];

let captions = [
    document.getElementById ("caption1"),
    document.getElementById ("caption2"),
    document.getElementById ("caption3"),
];

let captionTexts = [
    "The Past",
    "The Present",
    "The Future"
];

imageElements.forEach(function(image, index) {

    image.addEventListener("click", function() {

     image.setAttribute("src", images[index]);

     captions[index].innerHTML = captionTexts[index];

    });

 });   