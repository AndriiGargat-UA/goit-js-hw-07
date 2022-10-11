import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryMarcup = createGalleryItemMarcup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarcup);

function createGalleryItemMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
};

galleryRef.addEventListener('click', onGalleryRefClick);

function onGalleryRefClick(event) {
    event.preventDefault();
    const isGalleryRef = event.target.classList.contains('gallery__image');
    if (!isGalleryRef) {        
        return
    }
    const lightbox = new SimpleLightbox('.gallery a', {animationSlide:true, captionsData:"alt", captionDelay:250})
}

console.log(galleryItems);
