// script.js
const largeImage = document.getElementById('large-image');
const icons = document.querySelectorAll('.icon'); //lay class

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const imageSource = icon.getAttribute('src');
        largeImage.src = imageSource;
    });
});