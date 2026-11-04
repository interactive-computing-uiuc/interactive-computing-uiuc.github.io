(function () {
  var root = document.querySelector("[data-news]");
  if (!root) return;

  var list = root.querySelector("[data-news-list]");
  var bar = root.querySelector("[data-news-filters]");
  var empty = root.querySelector("[data-news-empty]");
  if (!list || !bar) return;

  var items = Array.prototype.slice.call(list.querySelectorAll("[data-venue]"));
  var seen = {};
  var venues = [];
  items.forEach(function (item) {
    var venue = item.getAttribute("data-venue");
    if (venue && !seen[venue]) {
      seen[venue] = true;
      venues.push(venue);
    }
  });
  venues.sort();

  function apply(venue) {
    var shown = 0;
    items.forEach(function (item) {
      var match = venue === "all" || item.getAttribute("data-venue") === venue;
      item.hidden = !match;
      if (match) shown += 1;
    });
    if (empty) empty.hidden = shown !== 0;
  }

  function addButton(venue, label) {
    var button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", function () {
      var buttons = bar.querySelectorAll("button");
      Array.prototype.forEach.call(buttons, function (other) {
        var active = other === button;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-pressed", active ? "true" : "false");
      });
      apply(venue);
    });
    bar.appendChild(button);
    return button;
  }

  var all = addButton("all", "All");
  all.classList.add("is-active");
  all.setAttribute("aria-pressed", "true");
  venues.forEach(function (venue) {
    addButton(venue, venue);
  });
  bar.hidden = false;
})();
