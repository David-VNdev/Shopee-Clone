var element = document.querySelector(
  "#main > div > div._193wCc > div.shopee-top.container-wrapper > div.ofs-header.container-wrapper > div > div > div.ofs-header__right > div.ofs-header__cart-wrapper > div > div > div > a"
);

element.addEventListener("mouseover", function () {
  console.log("Event triggered");
});

var event = new MouseEvent("mouseover", {
  view: window,
  bubbles: true,
  cancelable: true,
});

element.dispatchEvent(event);
