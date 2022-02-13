// TOP SECTION,HOME PAGE
function topSectionBtnMod(){
  var x = document.getElementById("top_section").querySelectorAll(".navbar_cont > .navbar_btn");

  var y = 11;
  for (let i = 1; i < x.length; i++) {
    x[i].style.marginRight = y.toString() + "%";
    y += 11;
  }
}

topSectionBtnMod();
