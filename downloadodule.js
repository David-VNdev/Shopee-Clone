var element = document.querySelector(
  "#main > div > div._193wCc > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div.container-wrapper.header-with-search-wrapper > div > div.header-with-search__cart-wrapper > div > div > div > a"
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
