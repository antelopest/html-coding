const notes = [
    {
        id: 1,
        title: "In State of the Union, Biden Will Cheer the Economy and Draw a Contrast With Trump",
        description: "President Biden enters his State of the Union speech on Thursday with an economic record that has defied forecasters’ gloomy expectations," +
            " avoiding recession while delivering stronger growth and lower unemployment than predicted. But polls suggest voters know relatively little about the legislation " +
            "Mr. Biden has signed into law that seeks to boost the economy through spending and tax breaks for infrastructure, clean energy, semiconductors and more.",
        dateCreated: "17-03-2024",
        selected: false
    },
    {
        id: 2,
        title: "A Popular Israeli Minister’s Meeting in London Sends a Message to Netanyahu",
        description: "When Benny Gantz, a member of Israel’s war cabinet, met David Cameron, Britain’s foreign secretary, in London on Wednesday, he got a sharp message that Israel must do more to allow humanitarian aid to flow into Gaza. " +
            "\It was the kind of minister-level meeting that would normally draw modest attention amid the flurry of high-level diplomacy that has enveloped the Israel-Hamas war. But Mr. Gantz and Mr. Cameron are no mere functionaries.",
        dateCreated: "24-03-2024",
        selected: false
    },
    {
        id: 3,
        title: "How China Came to Dominate the World in Solar Energy",
        description: "China unleashed the full might of its solar energy industry last year. It installed more solar panels than the United States has in its history." +
            "It cut the wholesale price of panels it sells by nearly half. " +
            "And its exports of fully assembled solar panels climbed 38 percent while its exports of key components almost doubled. " +
            "Get ready for an even bigger display of China’s solar energy dominance. " +
            "While the United States and Europe are trying to revive renewable energy production and help companies fend off bankruptcy, China is racing far ahead.",
        dateCreated: "24-03-2024",
        selected: false
    }
];

const notesDOM = document.getElementById("notes");
const countDOM = document.getElementById("count");
const noteDOM = document.getElementById("note");

const initPage = () => {
    notes.forEach(element => {
        const titleElement = document.createElement('div');
        titleElement.classList.add("article-title");
        titleElement.innerText = element.title;

        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add("article-description");
        descriptionElement.innerText = element.description;

        const dateCreatedElement = document.createElement('div');
        dateCreatedElement.classList.add("article-data");
        dateCreatedElement.innerText = element.dateCreated;

        const noteElement = document.createElement('li');
        noteElement.classList.add("articles-list-item");

        noteElement.appendChild(titleElement);
        noteElement.appendChild(descriptionElement);
        noteElement.appendChild(dateCreatedElement);

        notesDOM.appendChild(noteElement);
    });

    countDOM.innerText = `${notes.length} Notes`;

    const initNote = () => {
        const note = notes[0];

        const titleElement = document.createElement('div');
        titleElement.classList.add("note-title");
        titleElement.innerText = note.title;

        const lineElement = document.createElement('hr');
        lineElement.classList.add('line');

        const dateCreatedElement = document.createElement('div');
        dateCreatedElement.classList.add("note-date");
        dateCreatedElement.innerText = note.dateCreated;

        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add("note-description");
        descriptionElement.innerText = note.description;

        noteDOM.appendChild(titleElement);
        noteDOM.appendChild(lineElement);
        noteDOM.appendChild(dateCreatedElement);
        noteDOM.appendChild(descriptionElement);

        notesDOM.children[0].classList.add("active");
    }

    initNote();

    const initEventClick = () => {
        const list = [...notesDOM.children];

        const selectedElement = (index) => {

        }

        list.forEach(element => {
           element.addEventListener("click", (element) => {
               const selectedNoteElement = element.target.parentElement;

               const classList = [...selectedNoteElement.classList];

               if (!classList.includes("active")) {
                   list.forEach(element => {
                      element.classList.remove("active");
                   });

                   selectedNoteElement.classList.add('active');

                   const noteChildrenElements = [...noteDOM.children];

                   noteChildrenElements.forEach(element => {
                       const classList = [...element.classList];

                       if (classList.includes("note-title")) {
                           element.innerHTML = selectedNoteElement.children[0].innerHTML;
                       }

                       if (classList.includes("note-date")) {
                           element.innerHTML = selectedNoteElement.children[2].innerHTML;
                       }

                       if (classList.includes("note-description")) {
                           element.innerHTML = selectedNoteElement.children[1].innerHTML;
                       }
                   })
               }
           });
        });
    }

    initEventClick();
}

initPage();

const getNotesDOM = () => {

}


const renderNotes = () => {
    /* Удаление всех элементов DOM дерева внутри списка */

    /* Удаление count DOM */

    /* Удаление notes DOM */
    
    /* Отрисовка всех элементов DOM дерева внутри списка */
}


const renderNote = () => {
    /* Удаление элемента DOM дерева */

    /* Отрисовка элемента DOM дерева */
}

