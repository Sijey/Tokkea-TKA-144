const copyAddress = () => {
  const text = document.querySelector(".address-input");
  navigator.clipboard.writeText(text.value);
}

const acc = document.querySelectorAll(".accordion-button");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    const arrow = this.querySelector(".accordion-arrow");
    const text = this.nextElementSibling;
    if (text.style.maxHeight){
      text.style.maxHeight = null;
      text.style.marginTop = "0";
      arrow.classList.remove("accordion-arrow--active")
    } else {
      text.style.maxHeight = text.scrollHeight + "px";
      text.style.marginTop = "20px";
      arrow.classList.add("accordion-arrow--active");
    }
  });
}

