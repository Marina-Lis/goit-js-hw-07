import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galeryPalette = document.querySelector(".gallery");

galleryItems.forEach((value) => {
  console.log(value.original);
  const newEl = `<div class="gallery__item">
                        <a class="gallery__link" href="${value.original}">
                            <img class="gallery__image" src="${value.preview}" data-source="${value.original}" alt="${value.description}" />
                        
                            </a>
                    </div>`;
  galeryPalette.insertAdjacentHTML("beforeend", newEl);
});

let instance;

galeryPalette.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.nodeName);
  if (e.target.nodeName === "IMG") {
    instance = basicLightbox.create(`
    <img src="${e.target.getAttribute("data-source")}" width="300" height="200">
`);
    instance.show();
  }
});

const onEscapePressed = (e) => {
  if (e.key === "Escape" && basicLightbox.visible()) {
    instance.close();
  }
};

document.addEventListener("keyup", onEscapePressed);
