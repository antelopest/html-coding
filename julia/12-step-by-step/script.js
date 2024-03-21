const prevButtonDOM = document.getElementById("prev");
const nextButtonDOM = document.getElementById("next");
const circlesDOM = document.querySelectorAll(".circle");
const lineDOM = document.getElementById("line");

let currentStep = 1;

const render = () => {
    circlesDOM.forEach((circle, index) => {
        index++;

        if (currentStep >= index) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    if (currentStep > 1) {
        let width = Math.floor(100 / (circlesDOM.length - 1)) * (currentStep - 1);
        lineDOM.style.width = `${width}%`;
    } else {
        lineDOM.style.width = "0%";
    }

    if (currentStep === 1) {
        prevButtonDOM.disabled = true;
    } else {
        prevButtonDOM.disabled = false;
    }

    if (currentStep === circlesDOM.length) {
        nextButtonDOM.disabled = true;
    } else {
        nextButtonDOM.disabled = false;
    }
}

prevButtonDOM.addEventListener("click", function () {
    currentStep--;

    if (currentStep < 1) {
        currentStep = 1;
    }

    render();
});

nextButtonDOM.addEventListener("click", function () {
    currentStep++;

    if (currentStep > circlesDOM.length) {
        currentStep = circlesDOM.length;
    }

    render();
});

render();


