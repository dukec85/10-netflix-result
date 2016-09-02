export default function netflixResult(element, movieTitle) {
  fetch(`http://netflixroulette.net/api/api.php?title=${movieTitle}`)

  .then((res) => res.json())
  .then((data) => {
    const movie = document.querySelector('.movie');

    movie.innerHTML = `
      <div class="top-container">
        <div class="title-container">
          <h1 class="movie-title">${data.show_title}</h1>
          <h3 class="genre">${data.category}</h3>
          <h2 class="rating">${data.rating} <i class="fa fa-star" aria-hidden="true"></i></h2>
        </div>
        <div class="img-container">
          <img class="movie-poster" src="${data.poster}" alt="" class="poster">
        </div>
      </div>
      <div class="bottom-container">
        <div class="movie-review">
          <h2 class="summary">Summary</h2>
          <p>${data.summary}</p>
          <h2 class="cast">Cast</h2>
          <p>${data.show_cast}</p>
        </div>
      </div>`;
  });
}
