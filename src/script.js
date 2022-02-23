const shoes = [
  {
    name: "TY",
    src: `./images/1-range.png`,
    id: 1,
  },
  {
    name: "MAX",
    src: `./images/2-range.png`,
    id: 2,
  },
  {
    name: "EMME",
    src: `./images/3-range.png`,
    id: 3,
  },
  {
    name: "CAMILLE",
    src: `./images/4-range.png`,
    id: 4,
  },
  {
    name: "NOEL",
    src: `./images/5-range.png`,
    id: 5,
  },
  {
    name: "ROAN",
    src: `./images/6-range.png`,
    id: 6,
  },
  {
    name: "NAT",
    src: `./images/7-range.png`,
    id: 7,
  },
];
let id = 1;

const rangeItem = document.getElementById("range");
const modelName = document.getElementById("model-name");
const modelNumber = document.getElementById("model-number");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const image = document.createElement("img");
rangeItem.appendChild(image);

function range(id) {
  const model = shoes.find((model) => model.id === id);
  image.src = model.src;
  modelName.innerText = model.name;
  modelNumber.innerText = `${model.id}/${shoes.length}`;
}
range(id);

prevBtn.addEventListener("click", function () {
  id !== 1 ? id-- : (id = 7);
  range(id);
});
nextBtn.addEventListener("click", function () {
  id !== 7 ? id++ : (id = 1);
  range(id);
});
