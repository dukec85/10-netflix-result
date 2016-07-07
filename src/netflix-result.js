export default function netflixResult(element, movieTitle) {

  fetch(`http://netflixroulette.net/api/api.php?title=${movieTitle}`)
    .then((res) => res.json())
    .then((data) => {
      const movieThing = document.querySelector('.movie');
      movieThing.innerHTML = `
      <div class="body__container">
        <div class="body__column-left">
          <h1 class="body__title">${data.show_title}</h1>
          <h4 class="body__genre">${data.category}</h4>
          <h2 class="body__rating">${data.rating}
              <span class="fa fa-star" aria-hidden="true"></span></h2>
        </div>
        <div class="body__column-right">
          <img src="${data.poster}" alt="" class="body__img">
        </div>
      </div>
      <div class="body__row">
        <h3 class="body__row-title">Summary</h3>
        <p class="body__row-item">${data.summary}</p>
        <h3 class="body__row-title">Actors</h3>
        <p class="body__row-item">${data.show_cast}</p>
      </div>`;
    });
}
