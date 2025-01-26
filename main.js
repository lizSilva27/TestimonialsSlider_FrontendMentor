const buttonPrev = document.querySelector("#btnPrev");
const buttonNext = document.querySelector("#btnNext");
const testimonials = document.querySelectorAll(".containerTestimonial__testimonials_1, .containerTestimonial__testimonials_2");
const images = document.querySelectorAll(".containerRight__image__avatar");

let currentTestimonial = 0;

function updateCarousel(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? "block" : "none";
    // if(i === index) {
    //   testimonial.style.display = "block";
    // } else {
    //   testimonial.style.display = "none"
    // }
  });

  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
    // if(i === index) {
    //   img.style.display = "block";
    // } else {
    //   img.style.display = "none";
    // }
  });
}

buttonPrev.addEventListener("click", () => {
  console.log("prev");
  currentTestimonial--;
  if(currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1; 
  }
  updateCarousel(currentTestimonial)
});

buttonNext.addEventListener("click", () => {
  console.log("next");
  currentTestimonial++;
  if(currentTestimonial >= testimonials.length) {
    currentTestimonial = 0; 
  }
  updateCarousel(currentTestimonial);
});

updateCarousel(currentTestimonial)