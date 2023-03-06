const THUMBNAILS = document.querySelectorAll(".thumbnail__img");
const FULLSIZE_IMAGES = document.querySelectorAll(".fullsize__img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__x--close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let thIndex;

const showNextImg = () => {
  if (thIndex === THUMBNAILS.length - 1) {
    thIndex = 0;
  } else {
    thIndex++;
  }
  POPUP_IMG.src = FULLSIZE_IMAGES[thIndex].src;
};

const showPreviousImg = () => {
  if (thIndex === 0) {
    thIndex = THUMBNAILS.length - 1;
  } else {
    thIndex--;
  }
  POPUP_IMG.src = FULLSIZE_IMAGES[thIndex].src;
};

const closePopup = () => {
  POPUP.classList.add("popup--fadeOut");
  setTimeout(() => {
    POPUP.style.display = "none";
    POPUP.classList.remove("popup--fadeOut");
    THUMBNAILS.forEach((element) => {
      element.setAttribute("tabindex", 1);
    });
  }, 300);
};

THUMBNAILS.forEach((thumbnail, index) => {
  const showPopup = (e) => {
    POPUP.style.display = "flex";
    thIndex = index;
    POPUP_IMG.src = FULLSIZE_IMAGES[thIndex].src;
    THUMBNAILS.forEach((element) => {
      element.setAttribute("tabindex", -1);
    });
  };
  thumbnail.addEventListener("click", showPopup);
  thumbnail.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.keyCode === 13) {
      showPopup(e);
    }
  });
});

POPUP_CLOSE.addEventListener("click", () => {
  closePopup();
});

ARROW_LEFT.addEventListener("click", showPreviousImg);

ARROW_RIGHT.addEventListener("click", showNextImg);

document.addEventListener("keydown", (e) => {
  if (POPUP.style.display == "flex") {
    if (e.code === "ArrowLeft" || e.keyCode === 37) {
      showPreviousImg();
    }
    if (e.code === "ArrowRight" || e.keyCode === 39) {
      showNextImg();
    }
    if (e.code === "Escape" || e.keyCode === 27) {
      closePopup();
    }
  }
});

POPUP.addEventListener("click", (e) => {
  if (e.target === POPUP) {
    closePopup();
  }
});
