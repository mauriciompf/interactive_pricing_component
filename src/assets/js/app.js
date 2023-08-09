const range = document.querySelector("[data-range]");
const pageviews = document.querySelector("[data-pageviews]");
const price = document.querySelector("[data-price]");
const toggleButton = document.querySelector("[date-toggle]");

range.addEventListener("input", (e) => {
  const rangeValue = e.target.value;
  const progress = (rangeValue / range.max) * 100;

  range.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${progress}%, hsl(224, 65%, 95%) ${progress}%)`;

  switch (rangeValue) {
    case "8":
      pageviews.textContent = "10K";
      price.textContent = "8.00";
      break;
    case "12":
      pageviews.textContent = "50K";
      price.textContent = "12.00";
      break;
    case "16":
      pageviews.textContent = "100K";
      price.textContent = "16.00";
      break;
    case "24":
      pageviews.textContent = "500K";
      price.textContent = "24.00";
      break;
    case "36":
      pageviews.textContent = "1M";
      price.textContent = "36.00";
      break;
  }
});

toggleButton.addEventListener("input", () => {
  if (toggleButton.checked) {
    price.textContent = (
      price.textContent -
      parseInt(price.textContent) * 0.25
    ).toFixed(2);
  }
});
