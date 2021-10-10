let form = document.forms[0];
let name = document.getElementById('first-name');
let surname = document.getElementById('last-name');
let email = document.getElementById('email');
let backendCheckbox = document.getElementById('backend-checkbox');

function showFormError(el){

    if(el.id==="first-name"){
        if(el.validity.valueMissing){
            el.setCustomValidity("To pole jest wymagane, aby kontynuować.");
            form.reportValidity();
            el.classList.add('error');
        }else if(el.validity.tooLong){
            el.setCustomValidity("Wpisany ciąg znaków jest zbyt długi.");
            form.reportValidity();
            el.classList.add('error');
        }else if(el.validity.tooShort){
            el.setCustomValidity("Wpisany ciąg znaków jest zbyt krótki.");
            form.reportValidity();
            el.classList.add('error');
        }else if(el.validity.patternMismatch){
            el.setCustomValidity("Imię musi mieć format: Jedna duża litera, reszta małych, bez znaków specjalnych");
            form.reportValidity();
            el.classList.add('error');
        }
    }

    if(el.id==="last-name"){
        if(el.validity.valueMissing){
            el.setCustomValidity("To pole jest wymagane, aby kontynuować.");
            form.reportValidity();
            el.classList.add('error');
        }else if(el.validity.tooLong){
            el.setCustomValidity("Wpisany ciąg znaków jest zbyt długi.");
            form.reportValidity();
            el.classList.add('error');
        }else if(el.validity.tooShort){
            el.setCustomValidity("Wpisany ciąg znaków jest zbyt krótki.");
            form.reportValidity();
            el.classList.add('error');
        }else if(el.validity.patternMismatch){
            el.setCustomValidity("Nazwisko musi mieć format: Jedna duża litera, reszta małych, bez znaków specjalnych");
            form.reportValidity();
            el.classList.add('error');
        }
    }

    if(el.id==="email"){
        if(el.validity.valueMissing){
            el.setCustomValidity("To pole jest wymagane, aby kontynuować.");
            form.reportValidity();
            el.classList.add('error');
        }else if(el.validity.tooLong){
            el.setCustomValidity("Wpisany ciąg znaków jest zbyt długi.");
            form.reportValidity();
            el.classList.add('error');
        }else if(el.validity.tooShort){
            el.setCustomValidity("Wpisany ciąg znaków jest zbyt krótki.");
            form.reportValidity();
            el.classList.add('error');
        }else if(el.validity.patternMismatch){
            el.setCustomValidity("Email musi mieć format: nazwa@domena.xyz");
            form.reportValidity();
            el.classList.add('error');
        }
    }

    if(el.id==="backend-checkbox"){
        el.setCustomValidity("Przynajmniej jedna sekcja musi być zaznaczona.");
        form.reportValidity();
        document.getElementsByClassName('checkbox-grid')[0].classList.add('error');
    }
}

form.addEventListener('submit', (event) => {

    if(!name.validity.valid){
        showFormError(name);
        event.preventDefault();
    }

    if(!surname.validity.valid){
        showFormError(surname);
        event.preventDefault();
    }

    if(!email.validity.valid){
        showFormError(email);
        event.preventDefault();
    }

    if(document.querySelectorAll('[name="section"]:checked').length<1){
        showFormError(backendCheckbox);
        event.preventDefault();
    }

  });