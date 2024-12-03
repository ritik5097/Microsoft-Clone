let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1500); // Change image every 2 seconds
}

/*const sr = scrollreveal({
  distance:"600px",
  duration:2500,
  delay:400,
  reset: true
})
sr.reveal('.nav',{
  delay:200,
  origin:'top'
})
*/
ScrollReveal().reveal('.nav',{
delay:300,
duration:500,
origin:'top',
});
ScrollReveal().reveal('.microsoft-subscription,.games,.unyp,.Forbusiness ,.footer,.Subscription',{
delay:300,
duration:500,
origin:"left",
})
