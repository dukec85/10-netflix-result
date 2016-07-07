'use strict';
import netflixResult from 'netflix-result';
export default function(el) {


  const Btn = el.querySelector('.search-btn');
  let submission = el.querySelector('.search');
  console.log(Btn);

  function submit() {
    netflixResult(el, submission.value);
  }
  Btn.addEventListener('click', submit);

}
