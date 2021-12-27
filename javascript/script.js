'use strict';

const emailInput = document.querySelector('#email');
const warningMsg = document.querySelector('.warning-msg');
const sumbitBtn = document.querySelector('#submit');
const checkEmail = function () {
	emailInput.classList.remove('warning');
	warningMsg.classList.remove('active');
	const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	const emailValue = emailInput.value;
	const test = emailValue.match(regex);

	if (!test) {
		emailInput.classList.add('warning');
		warningMsg.classList.add('active');
	}
};
emailInput.addEventListener('change', checkEmail);
