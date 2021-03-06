//THIS CODE ADDS EVENT LISTENERS FOR CLICK
$(document).ready(function () {
  var row = document.getElementsByClassName("list__heading-row");
  row = Array.from(row);
  row.forEach((element) => {
    element.addEventListener("click", showText);
  });
});

//THIS FUNCTION ADDS AND REMOVES CLASS NAMES
function showText() {
    //THIS CODE REMOVES ALL EXISTING CLASSES WHEN YOU CLICK AN ALREADY-SELECTED ROW
  if (this.classList.contains("active-row")) {
    this.classList.remove("active-row");
    $(this).siblings(".list__text--collapsible")[0].style.display = "none";
} else {

      //THIS CODE ADDS ALL NECESSARY CLASSES TO THE ROW'S CHILDREN
    this.classList.add("active-row");
    $(this).siblings(".list__text--collapsible")[0].style.display = "inline-block";
  }
}