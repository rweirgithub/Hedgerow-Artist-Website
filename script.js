const extendedGalleryBtn = document.getElementById('extended-gallery-btn')
const extendedGallery = document.getElementById('extended-gallery')

extendedGalleryBtn.addEventListener('click', function () {
    extendedGallery.style.display = 'contents'
    extendedGalleryBtn.style.display = 'none'
})