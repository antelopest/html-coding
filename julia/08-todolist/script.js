'use strict';

const icons = {
    check: "check_circle",
    circle: "circle",
    none: "",
    close: "close"
}

const list = [
    {
        text: "Get dressed",
        done: true
    },
    {
        text: "Clean my room",
        done: false
    },
    {
        text: "Do the washing-up",
        done: false
    }
];

const listDOM = document.getElementById("list");
const listEmptyDOM = document.getElementById("list-empty");
const addItemDOM = document.getElementById("addItem");
const textItemDOM = document.getElementById("textItem");

const renderList = () => {

    /* function sort status */
    const sortItems = () => {
        list.sort(
            (a, b) =>
                a.done === b.done ? 0 : a.done ? - 1 : 1
        );
    }

    /* function remove all items DOM */
    const removeAllItems = () => {
        listDOM.innerHTML = "";
    }

    /* function render item in list DOM */
    const renderItem = (item, index) => {
        const statusElement = document.createElement("div");
        statusElement.classList.add("status");

        const iconStatusElement = document.createElement("span");
        iconStatusElement.classList.add("material-symbols-outlined");
        iconStatusElement.innerText = item.done ? icons.check : icons.circle;

        statusElement.appendChild(iconStatusElement);

        const textElement = document.createElement("div");
        textElement.classList.add("text");
        textElement.innerText = item.text;

        const actionElement = document.createElement("div");
        actionElement.classList.add("action");

        const iconActionElement = document.createElement("span");
        iconActionElement.classList.add("material-symbols-outlined");
        iconActionElement.innerText = item.done ? icons.none : icons.close;

        actionElement.appendChild(iconActionElement);

        const itemElement = document.createElement("li");
        itemElement.classList.add("item");

        itemElement.appendChild(statusElement);
        itemElement.appendChild(textElement);
        itemElement.appendChild(actionElement);

        if (item.done) itemElement.classList.add('done');

        const clickItem = (event) => {
            /* function remove item */
            const removeItem = () => {
                /* remove item in list */
                list.splice(index, 1);

                /* render list */
                renderList();
            }

            /* function change status item */
            const changeStatusItem = () => {
                /* change done in item */
                const item = list[index];
                item.done = item.done ? false : true;

                /* render list */
                renderList();
            }

            const parentElement = event.target.parentElement;
            const classList = [...parentElement.classList];

            /* remove item */
            if (classList.includes('action')) {
                removeItem();
            }

            /* change status item */
            if (classList.includes('status') || classList.includes('item')) {
                changeStatusItem();
            }
        }

        itemElement.addEventListener("click", clickItem);

        listDOM.appendChild(itemElement);
    }

    /* if list is empty */
    if (list.length) {
        listEmptyDOM.style.display = 'none';
    } else {
        listEmptyDOM.style.display = 'block';
    }

    /* sort items */
    sortItems();

    /* remove all items */
    removeAllItems();

    /* add item in list */
    list.forEach((element, index) => {
        renderItem(element, index);
    });
}

const addItem = () => {
    /* add item in list */
    list.push({
        text: textItemDOM.value,
        done: false
    });

    /* render list */
    renderList();

    /* clear textarea */
    textItemDOM.value = '';
}

renderList();