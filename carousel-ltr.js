var arr = [
  { src: "img/1.jpg", title: "Caption1" },
  { src: "img/2.jpg", title: "Caption2" },
  { src: "img/3.jpg", title: "Caption3" },
  { src: "img/4.jpg", title: "Caption4" },
  { src: "img/5.jpg", title: "Caption5" }
];
var imageContainer = document.getElementsByClassName("image-container");
var dotContainer = document.getElementsByClassName("dot-container");
var imageShow = 0;

createImage();
var image = document.getElementsByClassName("image");
image[imageShow].style.opacity = 1;

createDot();
var dot = document.getElementsByClassName("dot");
dot[imageShow].classList.add("active");

function createImage() {
  var div, img, p, text;
  for (var i = 0; i < arr.length; i++) {
    div = document.createElement("div");
    div.classList.add("image");
    img = document.createElement("img");
    img.setAttribute("src", arr[i].src);
    div.appendChild(img);
    p = document.createElement("p");
    p.classList.add("title");
    text = document.createTextNode(arr[i].title);
    p.appendChild(text);
    div.appendChild(p);
    imageContainer[0].appendChild(div);
  }
}

function createDot() {
  var span;
  for (var i = 0; i < image.length; i++) {
    span = document.createElement("span");
    span.classList.add("dot");
    span.setAttribute("onclick", "showOnDot(" + i + ")");
    dotContainer[0].appendChild(span);
  }
}

function move(n) {
  show(imageShow + n);
}

function showOnDot(n) {
  show(n);
}

function show(n) {
  var current, next;
  var animaNext, animaCurrent;

  if (n > imageShow) {
    if (n > image.length - 1) n = 0;
    animaNext = "moveLeftNextSlide";
    animaCurrent = "moveLeftCurrentSlide";
  } else if (n < imageShow) {
    if (n < 0) n = image.length - 1;
    animaNext = "moveRightPrevSlide";
    animaCurrent = "moveRightCurrentSlide";
  }
  current = image[imageShow];
  next = image[n];
  for (var i = 0; i < image.length; i++) {
    image[i].className = "image";
    image[i].style.opacity = 0;
    dot[i].className = "dot";
  }
  current.classList.add(animaCurrent);
  next.classList.add(animaNext);
  dot[n].classList.add("active");
  imageShow = n;
}
