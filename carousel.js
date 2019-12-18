var imageShow = 0;
show(imageShow);

function prev() {
  imageShow--;
  show(imageShow);
}
function next() {
  imageShow++;
  show(imageShow);
}
function showOnDot(n) {
  imageShow = n;
  show(imageShow);
}
function show(n) {
  var image = document.getElementsByClassName("image");
  var dot = document.getElementsByClassName("dot");
  for (var i = 0; i < image.length; i++) {
    image[i].classList.remove("fade");
    dot[i].style.background = "#bbbbbb";
  }
  if (n > image.length - 1) imageShow = 0;
  if (n < 0) imageShow = image.length - 1;
  image[imageShow].classList.add("fade");
  dot[imageShow].style.background = "slategray";
}
