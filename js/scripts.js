console.log('Hello, looks like the javascript file is loading properly')

function islington() {
	$('#islington').show();
  $('#holborn').hide()
  $('#king').hide()
}

function king() {
	$('#islington').hide();
  $('#holborn').hide()
  $('#king').show()
}

function holborn() {
	$('#islington').hide();
  $('#holborn').show()
  $('#king').hide()
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
