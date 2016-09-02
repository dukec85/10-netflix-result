import netflixResult from 'netflix-result';

export default function index(movie) {
  const search = document.querySelector('.inputAddOn-field');
  const button = document.querySelector('.inputAddOn-item');

  function submit(movie) {
    return netflixResult(movie, search.value);
  }

  button.addEventListener('click', function() {
     submit();
   });
};
