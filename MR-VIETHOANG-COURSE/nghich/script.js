const buttons = document.querySelectorAll("[data-carousel-button]");

const slides = document.querySelectorAll(".slide")
var counter = 0;

console.log(slides);

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)


// buttons.forEach((button) => {
// 	button.addEventListener("click", () => {
// 		const offset = button.dataset.carouselButton === "next" ? 1 : -1;
// 		const slides = button
// 			.closest("[data-carousel]")
// 			.querySelector("[data-slides]");

//         const activeSlide = slides.querySelector('[data-active]')
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset
//         // Add condition here
//         slides.children[newIndex].dataset.active = true;
//         delete activeSlide.dataset.active
// 	});
// });

// // let currentSlide = document.querySelector(".slide");
// // let previousButton = document.querySelector(".btn-previous");
// // let nextButton = document.querySelector(".btn-next");
// // let currentSlideIndex = 1;

// // let startSlide = 1;
// // let endSlide = 9;

// // currentSlide.innerHTML = "Slide 1";

// // function switchSlide(indicator) {
// // 	if (indicator === "next") {
// // 		if (currentSlideIndex < endSlide) {
// // 			currentSlideIndex++;
// // 		}
// // 	} else {
// // 		if (currentSlideIndex > startSlide) {
// // 			currentSlideIndex--;
// // 		}
// // 	}

// // 	// Update the slide
// // 	currentSlide.innerHTML = `Slide ${currentSlideIndex}`;

// // 	// if ((currentSlideIndex <= 10) && (currentSlideIndex >= 1)) {
// // 	//     if (indicator === "next")  {
// // 	//         currentSlideIndex ++;
// // 	//         console.log(`Now ${currentSlideIndex}`);
// // 	//     } else {
// // 	//         currentSlideIndex --;
// // 	//         console.log(`Now ${currentSlideIndex}`);
// // 	//     }
// // 	//     currentSlide.innerHTML = `Slide ${currentSlideIndex}`;
// // 	// }
// // }

// // previousButton.addEventListener("click", () => {
// // 	switchSlide("previous");
// // });

// // nextButton.addEventListener("click", () => {
// // 	switchSlide("next");
// // });
