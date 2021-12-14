import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(createGalleryItemsMarkup(galleryItems));
function createGalleryItemsMarkup (galleryItems){
const markup = galleryItems.map(galleryItem => {
    return `

<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
`;
});
console.log(markup);
}