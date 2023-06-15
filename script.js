let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

const images = {
  'product1': 'ETIQUETADORA OK/1ETI.png',
  'product2': 'ETIQUETADORA OK/2ETI.png',
  'product3': 'ETIQUETADORA OK/3ETI.png'
};
function changePreview(productName, preview) {
  const imageUrl = images[productName];
  preview.querySelector('.img').src = imageUrl;
}

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
        changePreview(name, preview);
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

