import { galleryDOM } from "../dom/dom.js";
import { gallery } from "../data/gallery.js";

export const renderComponentGallery = () => {
  galleryDOM.innerHTML = "";

  const createElement = (picture) => {
    const element = document.createElement("div");

    element.setAttribute("data-category", picture.category);

    element.classList.add("item");

    const image = document.createElement("img");

    image.src = picture.url;

    image.alt = picture.category;

    element.appendChild(image);

    return element;
  };

  for (let picture of Object.values(gallery)) {
    galleryDOM.appendChild(createElement(picture));
  }
};
