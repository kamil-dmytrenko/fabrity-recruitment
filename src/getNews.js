import axios from 'axios';
require('es6-promise').polyfill();
require('isomorphic-fetch');

localStorage.setItem('initialElementsNumber', '5');
let newsContainer,newsTitle, newsCreated, newsPhoto, newsText;
const newsSection = document.getElementsByClassName("news-section__news")[0];

const convertDate = timestamp => {
  const date = new Date(timestamp);
  return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};

const populateNewsSection = (newsList, newsNumber) => {
  for (let i = 0; i < newsNumber; i++) {
    newsContainer = document.createElement("div");
    newsContainer.className = "news-item";

    newsTitle = document.createElement("p");
    newsTitle.innerHTML = `${newsList[i].title}`;
    newsTitle.className = "news-item__title";

    newsCreated = document.createElement("p");
    newsCreated.innerHTML = `Date created: ${convertDate(newsList[i].date)}`;
    newsCreated.className = "news-item__date";

    newsPhoto = document.createElement("img");
    newsPhoto.src = newsList[i].image;
    newsPhoto.className = "news-item__photo";


    newsText = document.createElement("p");
    newsText.innerHTML = newsList[i].text;
    newsText.className = "news-item__text";

    newsContainer.appendChild(newsTitle);
    newsContainer.appendChild(newsCreated);
    newsContainer.appendChild(newsPhoto);
    newsContainer.appendChild(newsText);

    newsSection.appendChild(newsContainer);
  }
};
axios.get('https://my-json-server.typicode.com/TomaszJaworski/test-api/news')
  .then(function (response) {
    populateNewsSection(response.data, localStorage.getItem('initialElementsNumber'));
  })
  .catch(function (error) {
    console.log(error);
  });

