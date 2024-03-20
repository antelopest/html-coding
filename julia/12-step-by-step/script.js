const prevButtonDOM = document.getElementById("prev");
const nextButtonDOM = document.getElementById("next");
const circlesDOM = document.querySelectorAll(".circle");

let currentStep = 1;

const render = () => {
    circlesDOM.forEach((circle, index) => {
        index++;

        if (index === currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })
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


