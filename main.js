// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal')

// Your JavaScript code goes here!

let likeButtons = document.getElementsByClassName('like')

for(const button of likeButtons) {
  button.addEventListener('click', () => {
    const heart = button.firstElementChild;

    if(heart.innerText === EMPTY_HEART) {
      mimicServerCall().then(() => {
        heart.innerHTML = FULL_HEART;
        heart.setAttribute('class','activated-heart');
      })
      .catch(error => {
        modal.firstElementChild.innerText = 'Server Error!';
        modal.removeAttribute('class');
        setTimeout(function(){ modal.setAttribute('class', 'hidden') }, 3000);
      })
    } else if(heart.innerText === FULL_HEART) {
      heart.innerText = EMPTY_HEART;
      heart.removeAttribute('class');
    };
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
