var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function retirement(starting, percent, addition, years) {
  let currentYear = new Date().getFullYear();
  let total = starting;
  let monthlyPercent = percent / 100 / 12 + 1;
  for (let i = 0; i < years; i++) {
    console.log(currentYear + i + ": ");
    for (let i = 0; i < 12; i++) {
      console.log(
        " -" +
          month[i] +
          ": $" +
          total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
      );
      total *= monthlyPercent;
      total += addition / 12;
    }
  }
}

retirement(200000, 6, 24000, 20);
