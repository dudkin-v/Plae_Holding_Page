const shoesData = [
  {
    name: "TY",
    src: `./images/1-range.png`,
  },
  {
    name: "MAX",
    src: `./images/2-range.png`,
  },
  {
    name: "EMMIE",
    src: `./images/3-range.png`,
  },
  {
    name: "CAMILLE",
    src: `./images/4-range.png`,
  },
  {
    name: "NOEL",
    src: `./images/5-range.png`,
  },
  {
    name: "ROAN",
    src: `./images/6-range.png`,
  },
  {
    name: "NAT",
    src: `./images/7-range.png`,
  },
];
let index = 0;

const rangeItem = document.getElementById("slider");
const modelName = document.getElementById("shoes-name");
const modelNumber = document.getElementById("shoes-number");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const image = document.createElement("img");
rangeItem.appendChild(image);

function range(index) {
  const shoes = shoesData[index];
  image.src = shoes.src;
  modelName.innerText = shoes.name;
  modelNumber.innerText = `${index + 1}/${shoesData.length}`;
}
range(index);

prevBtn.addEventListener("click", function () {
  index === 0 ? (index = shoesData.length - 1) : index--;
  range(index);
});
nextBtn.addEventListener("click", function () {
  index === (shoesData.length - 1) ? (index = 0) : index++;
  range(index);
});
