function myFunction() {
  document.getElementById("productDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropfunc')) {

    var dropdowns = document.getElementsByClassName("dropdownList");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
