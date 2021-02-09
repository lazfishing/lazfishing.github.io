console.log('Hello, looks like the javascript file is loading properly')

var newListings = [
  {
    location:'#islington',
		placeName:'Look Mum No Hands!',
		placeDescription:"Breakfast, cakes and meals in bike workshop's coffee and wine bar, with big-screen cycling events.",
		placeImage:'https://www.lookmumnohands.com/uploads/images/OUTSIDE_01.jpg'
	},
	{
    location:'#king',
		placeName:'Roti King',
		placeDescription:'Simple no-frills Chinese and Malaysian restaurant and takeaway hidden away in a basement.',
		placeImage:'https://media-cdn.tripadvisor.com/media/photo-s/09/8b/12/52/roti-king-with-new-decoration.jpg'
	},
	{
    location:'#holborn',
		placeName:'Eat Tokyo',
		placeDescription:'Authentic Japanese owned restaurant serving sushi, sashimi, bento boxes, nigiri, chirashi and unagi.',
		placeImage:'https://grubstance.com/wp-content/uploads/2019/01/UNADJUSTEDNONRAW_thumb_12c73.jpg'
	},
  {
    location:'#islington',
		placeName:'Dragonfly Cafe',
		placeDescription:'Dragonfly Cafe is a family run restaurant providing authentic Vietnamese Cuisine.',
		placeImage:'https://rs-menus-api.roocdn.com/images/080e66e2-a1ad-4a37-bc66-10edd4aa2920/image.jpeg'
	},
  {
    location:'#islington',
		placeName:'Goswell Road Coffee',
		placeDescription:'This is the kind of local cafe that makes you want to while away a Sunday afternoon listening to DJ tunes while tapping out your latest novel on your laptop.',
		placeImage:'https://i.pinimg.com/originals/49/b6/a3/49b6a35260491309167061d3e252f7e1.jpg'
	},
  {
    location:'#holborn',
		placeName:'Balthazar',
		placeDescription:'Balthazar London offers something for everyone, all day long. We serve lunch and dinner, as well as weekend brunch.',
		placeImage:'https://media.timeout.com/images/100685277/image.jpg'
	}
]

function updateElements() {
  $('.boroughListing').empty()
  // append something for each element in the array
  newListings.forEach(function(place) {
  	$(place.location).append(`
  		<div>
  			<button class="collapsible">${place.placeName}</button>
  			<div class="content">
  				<div class="description">
  					<p>${place.placeDescription}</p>
  				</div>
  				<img src="${place.placeImage}" class='image'>
  			</div>
  		</div>
  	`)
  })

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
}

updateElements()

$('#addListing').click(function(){
	newListings.push({
		location:$('#borough').val(),
		placeName:$('#placeName').val(),
		placeDescription:$('#placeDescription').val(),
		placeImage:$('#placeImage').val()
	})
  updateElements()
})

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
