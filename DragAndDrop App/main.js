console.log("This is main.js");
const imgBox = document.querySelector(".imgBox");

const whiteBoxes = document.getElementsByClassName("whiteBox");

console.log(imgBox, whiteBoxes);

imgBox.addEventListener("dragstart", (e) => {
  // console.log('Dragstart has been triggered');
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = " hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  // console.log('Dragend has been triggered');
  e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover has been triggered");
  });
  whiteBox.addEventListener("dragenter", (e) => {
    console.log("dragenter has been triggered");
    e.target.className += ' dashed';
  });
  whiteBox.addEventListener("dragleave", (e) => {
    console.log("dragleave has been triggered");
    e.target.className = 'whiteBox';
  });
  whiteBox.addEventListener("drop", (e) => {
    console.log("drop has been triggered");
    e.target.append(imgBox);
  });
}
