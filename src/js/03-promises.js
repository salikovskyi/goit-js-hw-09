import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
 const { delay, step, amount }  = e.currentTarget;

  let currentDelay = Number(delay.value);
  const stepNumber = Number(step.value);
  const amountPopka = Number(amount.value);


  for (let position = 1; position <= amountPopka; position += 1){
    createPromise(position, currentDelay);
    console.log("delayPromise", currentDelay, "position", position);
    currentDelay += stepNumber
    
  }
  
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  // const values = { position, delay };

  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }

    }, delay);
  });

  promise
  .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });

};
