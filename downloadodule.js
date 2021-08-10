var element = document.querySelector(
  "#main > div > div._193wCc._3cVWns > div.shopee-top.shopee-top--sticky > div.container-wrapper.header-with-search-wrapper > div > div.header-with-search__cart-wrapper > div > div > div"
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
