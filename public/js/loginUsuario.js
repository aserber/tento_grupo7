window.addEventListener("load", function () {

    let form = document.querySelector(".form");
    //form.name.focus();

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let errors = [];
        let password = document.querySelector('#password');
        let email = document.querySelector('#email');
        var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        /// VALIDACION Email


        if (!regexEmail.test(email.value)) {
            errors.push('El email no cumple no tiene el formato correcto');
            email.classList.add('is-invalid');
        }
        else {
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }





        /// VALIDACION password
        if (password.value.length < 8) {
            errors.push('El campo pasword debe tener al menos 8 caracteres!');
            password.classList.add('is-invalid');
        }
        else {
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }

        if (errors.length > 0) {
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                text: 'Revise los errores!',
            })
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning')
            ulErrors.innerHTML = ''

            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li > ${errors[i]} </li>`
            }
        } else {
           
                    form.submit()
                
            }
        }
    )
})