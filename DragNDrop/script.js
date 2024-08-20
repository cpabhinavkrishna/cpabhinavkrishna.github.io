let listItems = document.getElementsByClassName("listItem");
let leftBox = document.getElementById("leftBox");
let rightBox = document.getElementById("rightBox");
for (list of listItems) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    console.log(selected);
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;
    });

    leftBox.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
  
      leftBox.addEventListener("drop", function (e) {
        leftBox.appendChild(selected);
        selected = null;
      });
  });
}
