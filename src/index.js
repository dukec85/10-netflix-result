'use strict';
import netflixResult from 'netflix-result';
export default function (movie, btn, submission) {
  btn.addEventListener('click', () => {
    netflixResult(movie, submission.value);
  });
}
