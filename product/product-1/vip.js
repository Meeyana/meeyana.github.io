// vip.js
const largeImage = document.getElementById('large-image');
const icons = document.querySelectorAll('.icon'); //lay class

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const imageSource = icon.getAttribute('src');
        largeImage.src = imageSource;
    });
});

//popup
let btnOpen = document.querySelector('.open-modal-btn')
let modal = document.querySelector('.modal1')
let iconClose = document.querySelector('.modal_header i')
let btnClose= document.querySelector('.modal_footer button')

function toggleModal(e) {
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click',toggleModal)
btnClose.addEventListener('click',toggleModal)
iconClose.addEventListener('click',toggleModal)
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})