let dropdown = document.querySelector(".dropdown");
let menu = document.querySelector(".dropdown-menu");
let qwe = document.querySelectorAll(".content_box > .heart_box_main");
let scetchic_one = document.querySelector(".scetchic_one");
// let language_text = document.querySelectorAll(".language_text");
// let check = document.getElementsByClassName('.content_box').length
// console.log(check);

for (let zxc of qwe) {
  zxc.addEventListener("click", function (f) {
    zxc.classList.toggle("active");
    let check = document.querySelectorAll(".active"),
      suball = check.length;
    console.log(suball);
    scetchic_one.innerHTML = suball;
  });
}

dropdown.addEventListener("click", function (e) {
  menu.classList.toggle("show");
});
// for (let asd of language_text) {
//   asd.addEventListener("click", function (d) {

//     asd.classList.remove("passive");
//   });
// }
