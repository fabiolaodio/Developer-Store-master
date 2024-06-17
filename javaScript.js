const containerProduct=document.querySelector('.container--product');
const displayNone=document.querySelector('#none')


containerProduct.addEventListener('mousemove', change);



function change(){
    event.preventDefault();
    displayNone.classList.remove('none');
    
    
}