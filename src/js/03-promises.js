import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firstDelayEl = document.querySelector('[name="delay"]');
const stepDelayEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', onCreatePromiseBtn);

function createPromise(position, delay, step) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const timeDelay = delay + (position - 1) * step;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${timeDelay} ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${timeDelay} ms`);
      }
    }, timeDelay);
  });
}

function onCreatePromiseBtn(evt) {
  evt.preventDefault();

  const delay = Number(firstDelayEl.value);
  const step = Number(stepDelayEl.value);
  const amount = Number(amountEl.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay, step)
      .then(message => {
        Notify.success(message);
        console.log(message);
      })
      .catch(error => {
        Notify.failure(error);
        console.log(error);
      });
  }
}
