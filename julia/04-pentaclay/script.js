const list = document.getElementsByClassName("questions-content-item");

for (let i = 0; i < list.length; i++) {
  list[i].children[0].addEventListener("click", function () {
    
    let isItemActive = false;

    list[i].classList.forEach(element => {
      console.log(element);
    })
    
    list[i].classList.add("active");
    let elementList = list[i].children[0].getElementsByClassName("question-button");
    let button = elementList[0];
    button.innerHTML = "-";
    

    for (let j = 0; j < list.length; j++) {
      if (i !== j) {
        list[j].classList.remove("active");

        let elementList = list[j].children[0].getElementsByClassName("question-button");
        let button = elementList[0];
        button.innerHTML = "+";
      }
    }
  });
}