const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

const sectionRange = Array.from(sections).reduce((acc, cur, index) => {
  const prevSection = acc[index - 1];
  const id = cur.getAttribute("id");

  if (prevSection) {
    const currentTop = prevSection.bottom;
    const currentBottom = currentTop + cur.offsetHeight;
    return [...acc, { top: currentTop, bottom: currentBottom, id }];
  } else {
    return [{ top: cur.offsetTop, bottom: cur.offsetHeight / 2, id }];
  }
}, []);

const inRange = (top, bottom, y) => y >= top && y <= bottom;

const onScrollWindow = () => {
  const windowScroll = window.scrollY;

  const activeSection = sectionRange.find((range) =>
    inRange(range.top, range.bottom, windowScroll)
  );
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(activeSection?.id)) {
      link.classList.add("active");
    }
  });
};

window.onscroll = onScrollWindow;

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector("section").offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().bottom;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

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

const range = (index) => {
  const shoes = shoesData[index];
  image.src = shoes.src;
  modelName.innerText = shoes.name;
  modelNumber.innerText = `${index + 1}/${shoesData.length}`;
};
range(index);

prevBtn.addEventListener("click", () => {
  index === 0 ? (index = shoesData.length - 1) : index--;
  range(index);
});
nextBtn.addEventListener("click", () => {
  index === shoesData.length - 1 ? (index = 0) : index++;
  range(index);
});
