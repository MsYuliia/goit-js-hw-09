import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const datePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let countInterval = null;
startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (new Date() < selectedDates[0]) {
      startButton.disabled = false;
    } else {
      Notify.failure('Please choose a date in the future');
    }
  },
};

startButton.addEventListener('click', startTimer);
const flatpickrObj = flatpickr(datePicker, options);

function startTimer() {
  const selectedTime = flatpickrObj.latestSelectedDateObj.getTime();
  countInterval = setInterval(timerCount, 1000, selectedTime);
  startButton.disabled = true;
}

function timerCount(selectedTime) {
  const { days, hours, minutes, seconds } = convertMs(
    selectedTime - new Date().getTime()
  );
  stopTimer(days, hours, minutes, seconds);
}

function stopTimer(days, hours, minutes, seconds) {
  if (days === -1) {
    clearTimeout(countInterval);
    Notify.success('Timer has finished!');
    return;
  }

  addLeadingZero(days, hours, minutes, seconds);
}

function addLeadingZero(days, hours, minutes, seconds) {
  daysElement.textContent = String(days).padStart(2, '0');
  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
