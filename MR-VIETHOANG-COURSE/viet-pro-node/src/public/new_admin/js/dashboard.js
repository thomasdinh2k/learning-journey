// Display Time
function displayTime() {
	document.getElementById("time").textContent = new Date().toLocaleTimeString();
	document.getElementById("date").textContent = new Date(
		"Mar 25 2015"
	).toLocaleDateString("vi", {
		weekday: "long",
		day: "numeric",
		month: "2-digit",
		year: "numeric",
	});
}

// Call displayTime every second to update the time
setInterval(displayTime, 1000);

const sideLinks = document.querySelectorAll(
	".sidebar .side-menu li a:not(.logout)"
);

sideLinks.forEach((item) => {
	const li = item.parentElement;
	item.addEventListener("click", () => {
		sideLinks.forEach((i) => {
			i.parentElement.classList.remove("active");
		});
		li.classList.add("active");
	});
});

const menuBar = document.querySelector(".content nav .bx.bx-menu");
const sideBar = document.querySelector(".sidebar");

menuBar.addEventListener("click", () => {
	sideBar.classList.toggle("close");
});

const searchBtn = document.querySelector(
	".content nav form .form-input button"
);
const searchBtnIcon = document.querySelector(
	".content nav form .form-input button .bx"
);
const searchForm = document.querySelector(".content nav form");

searchBtn.addEventListener("click", function (e) {
	if (window.innerWidth < 576) {
		e.preventDefault;
		searchForm.classList.toggle("show");
		if (searchForm.classList.contains("show")) {
			searchBtnIcon.classList.replace("bx-search", "bx-x");
		} else {
			searchBtnIcon.classList.replace("bx-x", "bx-search");
		}
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth < 768) {
		sideBar.classList.add("close");
	} else {
		sideBar.classList.remove("close");
	}
	if (window.innerWidth > 576) {
		searchBtnIcon.classList.replace("bx-x", "bx-search");
		searchForm.classList.remove("show");
	}
});

const toggler = document.getElementById("theme-toggle");

toggler.addEventListener("change", function () {
	if (this.checked) {
		document.body.classList.add("dark");
	} else {
		document.body.classList.remove("dark");
	}
});

// User-dropdown
let subMenu = document.getElementById("sub-menu");
let box = document.querySelector(".profile");

function toggleMenu() {
	subMenu.classList.toggle("open-menu");
}

// Close the dropdown if the user clicks outside of it
document.onclick = function (e) {
	if (!box.contains(e.target)) {
		console.log("Outside-clicked");
		subMenu.classList.remove("open-menu");
	}
};

// Go to Page number #Pagination

const pageInput = document.getElementById("pageInput");
const popup = document.getElementById("pop-up");

if (pageInput) {
	pageInput.addEventListener("focus", function () {
		console.log("pageInput is being focus");
		
		popup.style.display = "block";
		
		
	});
	
	pageInput.addEventListener("blur", function () {
		console.log("pageInput is NOT being focus");
		popup.style.display = "none";
	});
}

function goToPage() {
	if (pageInput) {
		const input = document.getElementById("pageInput");
		const pageNumber = input.value; // Get the user input
	}

	if (pageNumber) {
		window.location.href = `/admin/products?page=${pageNumber}`;
	}
}

// Dialog

var dialog = document.getElementById("deleteDialog");

function openDialog(button) {
    var productName = button.getAttribute("data-product-name");
    var productId = button.getAttribute('data-product-id');
    document.getElementById('productName').textContent = productName;
	document.getElementById('productId').textContent = `( ${productId} )`;
    dialog.style.display = "flex";
}

// Function to close the dialog
function closeDialog() {
    dialog.style.display = "none";
}

// Function to confirm deletion (simplified version, adjust as needed)
function confirmDeletion() {
    var productId = document.querySelector('[data-product-id]').getAttribute('data-product-id');
    window.location.href = `/admin/products/delete/${productId}`;
}