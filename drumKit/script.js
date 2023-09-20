function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
  function playsoundMobile(e) {
    const keyCode = e.target.getAttribute("data-key");
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
  
  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }
  
  const keyElements = document.querySelectorAll(".key");
  keyElements.forEach((key) => {
    key.addEventListener("click", playsoundMobile);
    key.addEventListener("transitionend", removeTransition);
  });
  // listening events
  window.addEventListener("keydown", playsound);