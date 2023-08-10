const slider = document.querySelector("[data-range]");
const pageviews = document.querySelector("[data-pageviews]");
const price = document.querySelector("[data-price]");
const toggleButton = document.getElementById("toggle");

slider.oninput = function () {
  const rangeValue = slider.value;
  const progress = (rangeValue / slider.max) * 100;

  slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${progress}%, hsl(224, 65%, 95%) ${progress}%)`;

  function togglePrice(amount) {
    price.textContent = `$${amount}.00`;
    toggleButton.checked
      ? (price.textContent = `$${amount - amount * 0.25}.00`)
      : (price.textContent = `$${amount}.00`);
  }

  function togglePageViews(view) {
    return slider.value >= 36
      ? (pageviews.textContent = `${view}M`)
      : (pageviews.textContent = `${view}K`);
  }

  switch (rangeValue) {
    case "8":
      togglePageViews(10);
      togglePrice(8);
      break;
    case "12":
      togglePageViews(50);
      togglePrice(8);
      break;
    case "16":
      togglePageViews(100);
      togglePrice(16);
      break;
    case "24":
      togglePageViews(500);
      togglePrice(24);
      break;
    case "36":
      togglePageViews(1);
      togglePrice(36);
      break;
  }
};

toggleButton.addEventListener("input", () => {
  slider.oninput();
});
