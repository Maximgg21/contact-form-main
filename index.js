const contactForm = document.querySelector("form");
const inputText = document.getElementsByClassName("input-text");
const inputTextErrorMessages = document.getElementsByClassName("text-error-message")
const inputRadio = document.getElementsByName("query");
const inputRadioErrorMessage = document.getElementById("radio-error-message");
const inputCheckbox = document.getElementsByName("consent");
const inputCheckboxErrorMessage = document.getElementById("checkbox-error-message");
const messageSentPopup = document.getElementById("message-sent-popup");
const errorMessages = document.getElementsByClassName("error-message");

let isValid = true;
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    isValid = true;
    for (let i = 0; i < inputText.length; i++) {
        if (!inputText[i].validity.valid) {
            inputTextErrorMessages[i].textContent = showErrorText(inputText[i]);
            inputTextErrorMessages[i].style.display = "inline-block";
            isValid = false;
        } else {
            inputTextErrorMessages[i].style.display = "none";
        }
    }

    if (!showIfChecked(inputRadio)) {
        inputRadioErrorMessage.style.display = "inline-block";
        isValid = false;
    } else {
        inputRadioErrorMessage.style.display = "none";
    }

    if (!showIfChecked(inputCheckbox)) {
        inputCheckboxErrorMessage.style.display = "inline-block";
        isValid = false;
    } else {
        inputCheckboxErrorMessage.style.display = "none";
    }

    if (isValid) {
        contactForm.reset();
        messageSentPopup.style.visibility = "visible";
        window.scrollTo(0, 0);
        setTimeout(function() {
            messageSentPopup.style.animationName = "fade-away";
        }, 3000)
        setTimeout(function() {
            messageSentPopup.style.animationName = "";
            messageSentPopup.style.visibility = "hidden";
        }, 5000)
    }
})

function showErrorText(element) {
    if (element.validity.valueMissing) {
        return "This field is required";
    } else if (element.validity.typeMismatch) {
        return "Please enter a valid email address";
    }
}

function showIfChecked(element) {
    for (let i = 0; i < element.length; i++) {
        if (element[i].checked) {
            return true;
        }
    }
    return false;
}
