const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const bill = document.querySelector(".bill input");
const pepole = document.querySelector(".no-peple input");
const tipam = document.querySelectorAll(".persent button");
const tipami = document.querySelector('.persent input[type="hidden"]');
const custom = document.querySelector('.persent input[type="number"]');
const reset = document.querySelector(".displayer button");
const Ttip = document.querySelector(".tip > strong span");
const total = document.querySelector(".total > strong span");
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (input.value == 0) {
      input.classList.remove("foc");
      input.classList.add("err");
      small = input.parentElement.previousElementSibling.querySelector("small");
      small.textContent = "Can't be zero";
    } else {
      input.classList.remove("err");
      input.classList.add("foc");
      small = input.parentElement.previousElementSibling.querySelector("small");
      small.textContent = "";
    }
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
tipam.forEach((button) => {
  button.addEventListener("click", (e) => {
    tipami.value = button.id;
    targ = e.target;
    targ.classList.add("clicked");
    tipam.forEach((btn) => {
      if (btn !== targ) {
        btn.classList.remove("clicked");
        if (!btn.classList.contains("btn")) {
          btn.classList.add("btn");
        }
      } else {
        btn.classList.remove("btn");
      }
    });
  });
});
tipam.forEach((button) => {});
reset.addEventListener("click", () => {
  form.reset();
  tipam.forEach((btn) => {
    btn.classList.remove("clicked");
    if (!btn.classList.contains("btn")) {
      btn.classList.add("btn");
    }
  });
  tipami.value = 0;
  Ttip.textContent = (0.0).toFixed(2);
  total.textContent = (0.0).toFixed(2);
  const smalls = document.querySelectorAll("small");
  for (small of smalls) {
    small.textContent = "";
  }
  const err = document.querySelectorAll(".err");
  err.classList.add("foc");
  err.classList.remove("err");
});
persent = document.querySelectorAll("input");
function persents() {
  if (tipami.value > 0 && !custom.value) {
    return tipami.value;
  } else {
    return custom.value;
  }
}
for (input of inputs) {
  input.addEventListener("input", () => {
    if (bill.value != 0 && pepole.value != 0) {
      terred = persents();
      totaltip = parseInt(bill.value) * (terred / 100) * parseInt(pepole.value);
      alltotal = parseInt(bill.value) + totaltip;
      if (totaltip.toFixed(2).length < 13 && alltotal.toFixed(2).length < 13) {
        Ttip.textContent = totaltip.toFixed(2);
        total.textContent = alltotal.toFixed(2);
        small.textContent = "";
      } else {
        const small = document.querySelector(".displayer small");
        small.textContent = "too many values";
        Ttip.textContent = (0.0).toFixed(2);
        total.textContent = (0.0).toFixed(2);
      }
    } else {
      Ttip.textContent = (0.0).toFixed(2);
      total.textContent = (0.0).toFixed(2);
    }
  });
}
