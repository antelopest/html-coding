import { filters } from "../data/filters.js";
import { filtersDOM, galleryDOM } from "../dom/dom.js";
import { category } from "../data/category.js";

export const renderComponentFilters = () => {
  filtersDOM.innerHTML = "";

  const createButton = (filter) => {
    const button = document.createElement("button");

    button.textContent = filter.name;

    button.setAttribute("data-filter", filter.name);

    if (filter.active) button.classList.add("active");

    const clickButton = (event) => {
      let filterName = event.target.dataset.filter;

      for (let filter of Object.values(filters)) {
        filter.active = filter.name === filterName;
      }

      for (let elementDOM of filtersDOM.childNodes) {
        elementDOM.classList.remove("active");

        if (elementDOM.dataset.filter === filterName)
          elementDOM.classList.add("active");
      }

      for (let elementDOM of galleryDOM.childNodes) {
        elementDOM.classList.remove("hidden");

        if (filterName === category.all) continue;

        if (elementDOM.dataset.category !== filterName) {
          elementDOM.classList.add("hidden");
        }
      }
    };

    button.addEventListener("click", clickButton);

    return button;
  };

  for (let filter of Object.values(filters)) {
    filtersDOM.appendChild(createButton(filter));
  }
};
