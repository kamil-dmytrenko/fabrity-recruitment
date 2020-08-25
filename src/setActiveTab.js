const newsNavButton = document.getElementsByClassName("header-navigation__list-item news-item")[0];
const techNavButton = document.getElementsByClassName("header-navigation__list-item technologies-item")[0];

const onNewsButtonClick = () => {
  newsNavButton.classList.add("active");
  techNavButton.classList.remove("active")
};
const onTechButtonClick = () => {
  techNavButton.classList.add("active");
  newsNavButton.classList.remove("active")
};

newsNavButton.onclick = () => onNewsButtonClick();
techNavButton.onclick = () => onTechButtonClick();

