// Menu Aim - Menu right
var $menu = $(".dropdown-menu");

$menu.menuAim({
	activate: activateSubmenu,
	deactivate: deactivateSubmenu,
});

function activateSubmenu(row) {
	var $row = $(row),
		submenuId = $row.data("submenuId"),
		$submenu = $("#" + submenuId),
		height = $menu.outerHeight(),
		width = $menu.outerWidth();

	// Debugging
	console.log("Activate Submenu called");
	console.log("Submenu ID:", submenuId);
	console.log("$submenu:", $submenu);

	// Show the submenu
	$submenu.css({
		display: "flex",
		// top: 0, //-35
		// left: width, // main should overlay submenu //left -310
		// height: height, // padding for main dropdown's arrow
	});
	// Keep the currently activated row's highlighted look
	$row.find("a").addClass("maintainHover");
}

function deactivateSubmenu(row) {
	var $row = $(row),
		submenuId = $row.data("submenuId"),
		$submenu = $("#" + submenuId);

	// Hide the submenu and remove the row's highlighted look
	$submenu.css("display", "none");

	$row.find("a").removeClass("maintainHover");
}

// Bootstrap's dropdown menus immediately close on document click.
// Don't let this event close the menu if a submenu is being clicked.
// This event propagation control doesn't belong in the menu-aim plugin
// itself because the plugin is agnostic to bootstrap.
$(".dropdown-menu li").click(function (e) {
	e.stopPropagation();
});

$(document).click(function () {
	// Simply hide the submenu on any click. Again, this is just a hacked
	// together menu/submenu structure to show the use of jQuery-menu-aim.
	$(".menu-right").css("display", "none");
	$("a.maintainHover").removeClass("maintainHover");
});

$("#header-top .list-group-item").hover(
	function () {
		$("#header-top .credit-1 a").addClass("hover");
		$("#header-top .credit-1 p").css("display", "block");
	},
	function () {
		$("#header-top .credit-1 a").removeClass("hover");
	}
);

$(".list-group").on("mouseleave", function () {
	console.log("Mouse leaves detected");
	$("a.maintainHover").removeClass("maintainHover");
	$(".menu-right").css("display", "none");
	// $('#header-top .credit-1 p').css("display", "none");
});

// ==== Run Carousel ===

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: false,
		margin: 8,
		nav: true,
		items: 5,
		lazyLoad: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: false,
		navText: [
			"<i class='fa-solid fa-circle-arrow-left'></i>",
			"<i class='icons arrow-right'></i>",
		],
	});
    
});