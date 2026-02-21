function switchDiv() {
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");
  const audio = document.getElementById("funnySound");

  div1.style.display = "none";
  div2.style.display = "block";

  audio.currentTime = 0;
  audio.play();
}
