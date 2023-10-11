const cardElements = document.querySelectorAll(".card");

function getRandNumber() {
  const min = 1;
  const max = 123;
  return Math.floor(Math.random() * (max - min)) + min;
}

function fillCards() {
  used_img_id = new Set();
  cardElements.forEach((card) => {
    let curr_img_id = getRandNumber();
    while (used_img_id.has(curr_img_id)) {
      curr_img_id = getRandNumber();
    }
    used_img_id.add(curr_img_id);
    card.style.backgroundImage =
      'url("https://randomfox.ca/images/' + curr_img_id.toString() + '.jpg")';
  });
}

fillCards();
