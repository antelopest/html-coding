"use strict";

const category = {
  all: "All",
  nature: "Nature",
  city: "City",
  people: "People",
};

const filters = {
  all: {
    name: category.all,
    active: true,
  },
  nature: {
    name: category.nature,
    active: false,
  },
  city: {
    name: category.city,
    active: false,
  },
  people: {
    name: category.people,
    active: false,
  },
};

const gallery = [
  {
    category: category.nature,
    url: "https://picsum.photos/id/1015/400/300",
  },
  {
    category: category.city,
    url: "https://picsum.photos/id/1016/400/300",
  },
  {
    category: category.people,
    url: "https://picsum.photos/id/1025/400/300",
  },
  {
    category: category.nature,
    url: "https://picsum.photos/id/1018/400/300",
  },
  {
    category: category.city,
    url: "https://picsum.photos/id/1020/400/300",
  },
  {
    category: category.people,
    url: "https://picsum.photos/id/1027/400/300",
  },
];

/* DOM ELEMENTS */
const filtersDOM = document.getElementById("filters");
const galleryDOM = document.getElementById("gallery");

/* */
