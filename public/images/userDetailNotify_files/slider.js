const listBox = document.querySelectorAll(".box-gift");
const wrapperBox = document.querySelector(".box-main");
const btnLeft = document.querySelector(".fa-w-left");
const btnRight = document.querySelector(".fa-w-right");
const giftContent = document.querySelector(".gift__content");
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1180) {
      make_slide(4);
    } else if (window.innerWidth < 1180) {
      make_slide(3);
    } else {
      make_slide(2);
    }
  });
  const media = [
    window.matchMedia("(min-width: 1180px)"),
    window.matchMedia("(min-width:1179px)"),
    window.matchMedia("(min-width: 590px)"),
  ];
  if (media[0].matches) {
    make_slide(4);
  } else if (media[2].matches) {
    make_slide(3);
  } else {
    make_slide(2);
  }
});

const make_slide = (amountSlideAppear) => {
  if (giftContent) {
    const widthItemAndMargin = giftContent.offsetWidth / amountSlideAppear;
    let widthAllBox = widthItemAndMargin * listBox.length;
    console.log(widthAllBox);
    wrapperBox.style.width = `${widthAllBox}px`;
    listBox.forEach((element) => {
      element.style.marginRight = "20px";
      element.style.width = `${widthItemAndMargin - 20}px`;
    });

    //handle Slide

    let count = 0;
    let spacing = widthAllBox - amountSlideAppear * widthItemAndMargin;
    btnRight.addEventListener("click", () => {
      count += widthItemAndMargin;
      if (count > spacing) {
        count = 0;
      }
      wrapperBox.style.transform = `translateX(${-count}px)`;
    });
    btnLeft.addEventListener("click", () => {
      count -= widthItemAndMargin;
      if (count < spacing) {
        count = 0;
      }
      wrapperBox.style.transform = `translateX(${0}px)`;
    });
  }
};
