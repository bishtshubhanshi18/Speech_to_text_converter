const checkbox = document.getElementById("myCheckbox");
const firstSwitch = document.getElementById("mic");
const secondSwitch = document.getElementById("stop");
const textarea = document.getElementById("inputText");
const Ianimation = document.getElementById("ImgAnimo");
const Iani1 = document.getElementById("ImgAnimation");
const Iani2 = document.getElementById("ImgAnimationO");
const Iani3 = document.getElementById("ImgAnimationR");
const VttOut = document.getElementById("voiceToTextOut");

Ianimation.style.minHeight = '45vmin';

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    firstSwitch.disabled = true;
    secondSwitch.disabled = false;
    textarea.style.display = 'block';
    Ianimation.style.display = 'none';
    Ianimation.style.minHeight = '0';
    Iani1.style.display = 'none';
    Iani2.style.display = 'none';
    Iani3.style.display = 'none';
    VttOut.style.display = 'none';
  } else {
    firstSwitch.disabled = false;
    secondSwitch.disabled = true;
    textarea.style.display = 'none';
    Ianimation.style.display = 'block';
    Ianimation.style.minHeight = '45vmin';
    VttOut.style.display = 'block';
  }
});