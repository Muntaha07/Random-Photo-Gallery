var data = [
    {
    imagesrc : "https://picsum.photos/200/?random=1"
    },
    {
    imagesrc : "https://picsum.photos/200/?random=2"
    },
    {
    imagesrc : "https://picsum.photos/200/?random=3"
    },
    {
    imagesrc : "https://picsum.photos/200/?random=4"
    },
    {
    imagesrc : "https://picsum.photos/200/?random=5"
    },
    {
    imagesrc : "https://picsum.photos/200/?random=6"
    },
    {
    imagesrc : "https://picsum.photos/200/?random=7"
    },
    {
    imagesrc : "https://picsum.photos/200/?random=8"
    },
    {
    imagesrc : "https://picsum.photos/200/?random=9"
    },
    {
    imagesrc : "https://picsum.photos/200/?random=10"
    },
]
 function showTheElem() {
    var containerEL = document.querySelector(".container-images")

 var clutter=''
 data.forEach(element => {
    clutter += `<img src=${element.imagesrc}>`;
    console.log( clutter );
    
});
containerEL.innerHTML = clutter;

 }

function ClickTheBtnShowTheNewImage(params) {
    var containerEL = document.querySelector(".container-images")
var btn = document.querySelector(".btn")
var imageno =10


btn.addEventListener("click", function () {
    updateImages()
})

function updateImages() {
   for (let index = 0; index < imageno; index++) {
    var imgcount = Math.floor(Math.random() * 2000);
    var newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/200/?random=${imgcount}`
    containerEL.appendChild(newImage);
    
   }
}
}
showTheElem()
ClickTheBtnShowTheNewImage()






