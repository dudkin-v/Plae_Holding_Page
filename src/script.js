const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

const onScrollWindow = () => {
  let activeSectionId;
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if(window.scrollY >= sectionTop - sectionHeight / 2 ) {
      activeSectionId = section.getAttribute("id");
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if(link.getAttribute("href").includes(activeSectionId)) {
      link.classList.add("active");
    }
  })
}

window.onscroll = onScrollWindow;

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function(e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('section').offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
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
}
range(index);

prevBtn.addEventListener("click",() => {
  index === 0 ? (index = shoesData.length - 1) : index--;
  range(index);
});
nextBtn.addEventListener("click",() => {
  index === (shoesData.length - 1) ? (index = 0) : index++;
  range(index);
});
