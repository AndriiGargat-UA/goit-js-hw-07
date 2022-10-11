import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
};

galleryRef.addEventListener('click', onGalleryRefClick);

let modalWindow;

function onGalleryRefClick(event) {
    event.preventDefault();
    const isGalleryRef = event.target.classList.contains('gallery__image');
    if (!isGalleryRef) {        
        return
    }

    modalWindow = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)
    const modalOpen = modalWindow.show(window.addEventListener('keydown', onEscKeyPress));
};

function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        modalWindow.close(window.removeEventListener('keydown', onEscKeyPress));    
    };
};