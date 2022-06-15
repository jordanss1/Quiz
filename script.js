// Build a three-question quiz. Create an HTML form with a three-question quiz. Each question should have four multiple-choice 
//answers to choose from. When the user submits the quiz, add a message underneath each question letting them know if they got 
//it right/wrong (give them the correct answer).

/*
1. Initialised all the buttons to be used with an on-click event to add a class which would style and animate the sibling div of the buttons, the form
inside the div and disable the buttons after the first use. It also removes the classes that affect the div on hover, to ensure only the 
new styles are applied.

2. I used the forEach method on all the forms to prevent them from submitting and refreshing the page. Since each form has different correct answers
I added an individual event listener on each one. At the top I defined the <p> tags within that div and defined the inputs within that form using 
.getElementsByName. The "result" function's condition checks if the correct answer was chosen, by appending ".checked" to the correct element in the 
input array and adding text to the element with innerText. This is also done for the incorrect options (with the else statement).

3. Added window.innerWidth for the responsiveness of mobile devices after the buttons are clicked. There is a default margin in the css for devices
under 576px that is slowly transitioned to 10px with a class that is added on-click of the button if the screen is under 576px.

*/

const buttonsToShowQuestions = document.querySelectorAll(".button");

//Section for the forms

document.getElementsByName("form").forEach(submitBtn => {
	submitBtn.addEventListener("submit", e => {
		e.preventDefault();
	})
});



document.getElementsByClassName("question1")[0].addEventListener("submit", e => {
	const chosenAnswer = document.getElementsByName("inches");
	const p = document.querySelector(".answer1");

	const resultDisplay = (p) => {
		if (chosenAnswer[1].checked) {
			p.innerText = "Correct!";
		} else {
			p.style.visibility = "visible";
			p.innerText = "Incorrect, 12 is correct!";
		}
	};

	resultDisplay(p);
});

document.getElementsByClassName("question2")[0].addEventListener("submit", e => {
	const chosenAnswer = document.getElementsByName("rain");
	const p = document.querySelector(".answer2");

	const resultDisplay = (p) => {
		if (chosenAnswer[0].checked) {
			p.innerText = "Correct!";
		} else {
			p.innerText = "Incorrect, the sky is correct!";
		}
	};

	resultDisplay(p);
});

document.getElementsByClassName("question3")[0].addEventListener("submit", e => {
	const chosenAnswer = document.getElementsByName("nigeria");
	const p = document.querySelector(".answer3");

	const resultDisplay = (p) => {
		if (chosenAnswer[2].checked) {
			p.innerText = "Correct!";
		} else {
			p.innerText = "Incorrect, Africa is correct!";
		}
	};

	resultDisplay(p);
});

document.getElementsByClassName("question4")[0].addEventListener("submit", e => {
	const chosenAnswer = document.getElementsByName("comedian");
	const p = document.querySelector(".answer4");

	const resultDisplay = (p) => {
		if (chosen[1].checked) {
			p.innerText = "Correct!";
		} else {
			p.innerText = "Incorrect, Dave Chappelle is correct!";
		}
	};

	resultDisplay(p);
});


//Section for all of the buttons that animate the divs



buttonsToShowQuestions[0].addEventListener("click", e => {
	const divThatHoldsForm = document.querySelector(".click1");
	const containerOfDivThatHoldsForm = document.querySelector(".container-click1");
	const form = document.querySelector(".question1");
	buttonsToShowQuestions[0].disabled = true;

	if (window.innerWidth < 576) {
		buttonsToShowQuestions[0].setAttribute("style", "position: absolute; bottom: 569px");
	} else {
		buttonsToShowQuestions[0].setAttribute("style", "position: absolute; bottom: 525px;");
	}

	form.classList.add("form-shown");

	divThatHoldsForm.classList.remove("removed-hover1");

	if (window.innerWidth < 576) {
		containerOfDivThatHoldsForm.classList.add("margin-0");
		divThatHoldsForm.classList.add("click-div");
	} else {
		divThatHoldsForm.classList.add("click-div");
	}

});

buttonsToShowQuestions[1].addEventListener("click", e => {
	const divThatHoldsForm = document.querySelector(".click2");
	const form = document.querySelector(".question2");
	buttonsToShowQuestions[1].disabled = true;

	if (window.innerWidth < 576) {
		buttonsToShowQuestions[1].setAttribute("style", "position: absolute; bottom: 355px;")
	} else {
		buttonsToShowQuestions[1].setAttribute("style", "position: absolute; bottom: 525px;");
	}

	form.classList.add("form-shown");
	divThatHoldsForm.classList.remove("removed-hover2");
	divThatHoldsForm.classList.add("click-div");
	
});

buttonsToShowQuestions[2].addEventListener("click", e => {
	const divThatHoldsForm = document.querySelector(".click3");
	const containerOfDivThatHoldsForm = document.querySelector(".container-click2");
	const form = document.querySelector(".question3");
	buttonsToShowQuestions[2].disabled = true;

	if (window.innerWidth < 576) {
		buttonsToShowQuestions[2].setAttribute("style", "position: absolute; top: 980px;");
	} else {
		buttonsToShowQuestions[2].setAttribute("style", "position: absolute; bottom: 83px;");
	}

	form.classList.add("form-shown");

	divThatHoldsForm.classList.remove("removed-hover3");

	if (window.innerWidth < 576) {
		containerOfDivThatHoldsForm.classList.add("margin-0");
		divThatHoldsForm.classList.add("click-div");
	} else {
		divThatHoldsForm.classList.add("click-div");
	}
	
});

buttonsToShowQuestions[3].addEventListener("click", e => {
	const divThatHoldsForm = document.querySelector(".click4");
	const form = document.querySelector(".question4");

	buttonsToShowQuestions[3].disabled = true;
	buttonsToShowQuestions[3].setAttribute("style", "position: absolute; bottom: -450px;");

	form.classList.add("form-shown");
	divThatHoldsForm.classList.remove("removed-hover4");
	divThatHoldsForm.classList.add("click-div");
	
});
