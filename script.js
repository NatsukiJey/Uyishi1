const form = document.getElementById("form");
const tbody = document.getElementById("tbody");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // sahifa yangilanmasin

  const fields = ["ism", "familiya", "yosh", "telefon", "manzil"];
  const row = document.createElement("tr");

  for (const name of fields) {
    const cell = document.createElement("td");
    cell.textContent = form.elements[name].value.trim(); // xavfsiz: HTML emas, faqat matn
    row.appendChild(cell);
  }

  tbody.appendChild(row);
  form.reset();
  form.elements.ism.focus();
});
