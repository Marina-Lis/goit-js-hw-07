import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galeryPalette = document.querySelector(".gallery");

galleryItems.forEach((value) => {
  const newEl = `<a class="gallery__item" href="${value.original}">
                      <img class="gallery__image" src="${value.preview}" alt="${value.description}" />
                 </a>`;
  galeryPalette.insertAdjacentHTML("beforeend", newEl);
});

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
