var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("nxt");
  var captionText = document.getElementById("name");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].name;
    if(dots[slideIndex-1].name == "SPIDER MAN")
        {
            document.body.style.backgroundColor = "#D72C20";
    document.getElementById('realname').innerHTML="Peter Parker";
            document.getElementById('text').innerHTML=
        "With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.";
    document.getElementById('line').innerHTML= "With great power comes great responsibility";
    document.getElementById('net').innerHTML= "17";
        }
    else  if(dots[slideIndex-1].name == "IRON MAN")
        {
            document.body.style.backgroundColor = "#FFBB42";
    document.getElementById('realname').innerHTML="Tony Stark";
    document.getElementById('text').innerHTML=
        "Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.";
    document.getElementById('line').innerHTML= "I am Iron Man";
            document.getElementById('net').innerHTML= "15";
        }
    else if(dots[slideIndex-1].name == "CAP AMERICA")
        {
    document.body.style.backgroundColor = "#006b99";
    document.getElementById('realname').innerHTML="Steve Rogers";
    document.getElementById('text').innerHTML=
        "America&#39;s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty.";
    document.getElementById('line').innerHTML= "I can do this all day";
            document.getElementById('net').innerHTML= "13";    
        }
}