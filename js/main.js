
/*navToggle*/
let nav = $("#nav");
let navigationToggle = $("#navigationToggle");

navigationToggle.on("click", function (event) {
	 event.preventDefault();

	 nav.toggleClass("show");
});

navigationToggle.on("click", function (event) {
	event.preventDefault();

	show.toggleClass("part");
});

$('.description-slider').slick({
	infinite: true,
	arrows: true,
	dots: false,
	centerMode: false,
	mobileFirst: true,
});
