import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galeryPalette = document.querySelector(".gallery");

{/* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> */}

galleryItems.forEach((value) => {
    const newEl = `<a class="gallery__item" href="${value.original}">
                              <img class="gallery__image" src="${value.preview}" alt="${value.description}" />
                          </a>`;
    galeryPalette.insertAdjacentHTML("beforeend", newEl);
  });

  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function () {
    animationSpeed,
    captionPosition
  });