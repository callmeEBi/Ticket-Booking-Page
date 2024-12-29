let $ = document;
let country = $.querySelector("#country");
let city = $.querySelector("#city");
let allInOne = {
  iran: ["tehran", "tabriz", "karaj", "arak"],
  canada: ["vanquer", "torento", "quebek"],
  usa: ["new york", "new jercy", "atlanta"],
};
let cVal, newSelect, identifier;
country.addEventListener("change", change2);
function change2() {
  city.innerHTML = "";
  cVal = country.value;
  if (cVal === "none") {
    newOption = $.createElement("option");
    newOption.innerHTML = "please select a country";
    newOption.value = "none";
    city.append(newOption);
    return;
  }
  for (i of allInOne[cVal]) {
    newOption = $.createElement("option");
    newOption.innerHTML = i;
    newOption.value = i;
    city.append(newOption);
  }
}
