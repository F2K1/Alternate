// index.html
var v = window.matchMedia("(max-width: 991.2px)"); // if you want another condition ad "and" inside the paranthessis

function reorder(v) {
  if (v.matches) {
    document.querySelectorAll("#about_section > .container-fluid > .row > div")[2].classList.add("order-2");
  }
  else {
    document.querySelectorAll("#about_section > .container-fluid > .row > div")[2].classList.remove("order-2");
  }
}

reorder(v);
v.addListener(reorder);
// -----------------------------------------------------------------------------
// var x = window.matchMedia("(max-width: 896px) and (min-width: 499px)");
// // var y = window.matchMedia("(max-width: 499px) and (min-width: 484px)");
//
// function respace(x) {
//   sections = document.querySelectorAll("section");
//   sm_divs = document.querySelectorAll(".sm_div");
//   if (x.matches) {
//     for (let i = 0; i < sections.length; i++) {
//       document.querySelectorAll("section")[i].style.paddingTop = "10.213rem";
//     }
//     for (let i = 0; i < sm_divs.length; i++) {
//       document.querySelectorAll(".sm_div")[i].style.top = "8.713rem";
//     }
//   }
//   else {
//     for (let i = 0; i < sections.length; i++) {
//       document.querySelectorAll("section")[i].style.paddingTop = "0";
//     }
//     for (let i = 0; i < sm_divs.length; i++) {
//       document.querySelectorAll(".sm_div")[i].style.top = "4.375rem";
//     }
//   }
// }
//
// respace(x);
// x.addListener(respace);
//------------------------------------------------------------------------------
