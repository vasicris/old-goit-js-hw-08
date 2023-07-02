// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';


console.log(galleryItems);
const gallery = document.querySelector('.gallery')

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__img");
  galleryImg.src = item.preview;
  galleryImg.setAttribute("data-source", item.original);
  galleryImg.alt = item.description;

  galleryItem.append(galleryLink)
  galleryLink.append(galleryImg)
  gallery.append(galleryItem)
});

  new SimpleLightbox('.gallery a', {
    captionDelay: 250,
});
