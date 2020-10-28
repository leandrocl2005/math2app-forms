var rad = document.options.question;
var prev = rad[0];
for (var i = 0; i < rad.length; i++) {
  rad[i].addEventListener("change", function () {
    prev ? console.log(prev.value) : null;
    if (this !== prev) {
      document
        .getElementById(`${prev.value}`)
        .classList.toggle("radio-input-container-deselected");
      prev = this;
      document
        .getElementById(`${prev.value}`)
        .classList.toggle("radio-input-container-deselected");
    }
    console.log(this.value);
  });
}
