// Logic:
// When we click "next", we want progress bar to fill.
// We also want the corresponding number to fill.
// When we click "prev", we want the progess bar to unfill.
// We also want the corresponding number to unfill.
// When we are at 1, we want "prev" to be disabled.
// When we are at 4, we want "next" to be disabled.

// Perhaps we can start with a counter of i=0?
// Clicking "Next" would add to the counter and clicking "previous" would take away from the counter.

const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  if (currentActive < 4) {
    currentActive++;
  }

  update();
  console.log(currentActive);
});

prev.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
  }

  update();
  console.log(currentActive);
});

function update() {
  if (currentActive == 4) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }

  if (currentActive == 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }
}
