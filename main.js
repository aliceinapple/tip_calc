const amount = document.getElementById("amount");
const guests = document.getElementById("guest");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");

calculate = () => {
  const tip = ((amount.value * quality.value) / guests.value).toFixed(2);
  amount.value = "";
  guests.value = "";
  quality.value = "";
  if (tip === "NaN") {
    tipAmount.innerHTML = "Чаевые 0 р";
    showTipAmount();
  } else {
    tipAmount.innerHTML = "По " + tip + " р с каждого";
    showTipAmount();
  }
};

showTipAmount = () => {
  let x = tipAmount;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};
