let images = document.querySelectorAll('.img-car');
array = [];
for (let i = 0; i < images.length; i++) {
  array.push(i);
}

function hideImage() {
  if (array.length > 1) {
    let deleted = Math.floor(Math.random() * array.length);
    // images[deleted].parentNode.style.display = 'none';
    // console.log(array);
    // console.log(deleted);
    deletedImage = array[deleted];
    images[deletedImage].parentNode.parentNode.removeChild(images[deletedImage].parentNode);
    array.splice(deleted, 1);
    console.log(array);
  }
  else {
    let deletedImage = array[0];
    // console.log(deletedImage);
    images[deletedImage].parentNode.parentNode.removeChild(images[deletedImage].parentNode);
  }
}
