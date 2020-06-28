function hideImage() {
  let images = document.querySelectorAll('.img-car');

  var i = Math.floor(Math.random() * 3);
  console.log(i);
  // images[i].style.display = 'none';
  images[i].parentNode.style.display = 'none';
}
