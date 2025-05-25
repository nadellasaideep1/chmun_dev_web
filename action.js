 function showAbout() {
      const about = document.getElementById("aboutSection");
      about.style.display = "block";
      document.body.style.overflow = "auto";
      about.scrollIntoView({ behavior: "smooth", block: "start" });
      typeWriter()

    }
var i = 0;
var txt = 'We aim to build a new generation of Indian leaders through';
var i2 = 0;
var txt2 = 'diplomacy.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else{
    typeWriter2()
  }
}

function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter, speed);
  }
}
