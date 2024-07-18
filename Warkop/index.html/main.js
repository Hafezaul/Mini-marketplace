
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
  count++;
  countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
  if(count > 0) {
    count--;
    countLabel.textContent = count;
  }
}

document.getElementById("countMenu").onclick = function() {
  alert(`Anda telah membeli menu ini sebanyak ${count} kali.`);
}