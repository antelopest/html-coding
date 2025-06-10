"use strict";

import { renderComponentFilters } from "./render/filters.js";
import { renderComponentGallery } from "./render/gallery.js";

const initPage = () => {
  renderComponentFilters();
  renderComponentGallery();
};

document.addEventListener("DOMContentLoaded", initPage);
