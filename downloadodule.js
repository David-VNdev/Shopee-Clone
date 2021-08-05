var element = document.querySelector(
  "#main > div > div._193wCc._3cVWns > div.shopee-top.shopee-top--sticky > div.navbar-wrapper.container-wrapper > div > div.flex.v-center._2oiwpp > a:nth-child(3) > div"
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
