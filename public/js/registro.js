window.addEventListener("load", function(){

    let form = document.querySelector(".form");
    //form.name.focus();

    form.addEventListener("submit", function (e) {
        
        let errors = [];
        let name = document.querySelector('#name');
        let last_name = document.querySelector('#last_name');
        let password = document.querySelector('#password');
        let email = document.querySelector('#email');
        let avatar = document.querySelector('#file');
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        /// VALIDACION Nombre
        if (name.value.length < 2 ) {
            errors.push('El campo nombre no puede tener menos de 2 caracteres!');
            name.classList.add('is-invalid');
        }
        else{
            name.classList.add('is-valid');
            name.classList.remove('is-invalid');
        }
        /// VALIDACION Apellido
        if (last_name.value.length < 2 ) {
            errors.push('El campo apellido no puede tener menos de 2 caracteres!');
            last_name.classList.add('is-invalid');
        }
        else{
            last_name.classList.add('is-valid');
            last_name.classList.remove('is-invalid');
        }
        /// VALIDACION Email


        if (!regexEmail.test(email.value)){
            errors.push('El email no cumple no tiene el formato correcto');
            email.classList.add('is-invalid');
        } 
        else{
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }

        
        /// VALIDACION imagen 

        if (!allowedExtensions.test(avatar.value)) {
            errors.push('El campo imagen debe tener un archivo jpg, jpeg, png o gif!');
            avatar.classList.add('is-invalid');
        }
        else{
            avatar.classList.add('is-valid');
            avatar.classList.remove('is-invalid');
        }

        
        /// VALIDACION password
        if (password.value.length < 8 ) {
            errors.push('El campo pasword debe tener al menos 8 caracteres!');
            password.classList.add('is-invalid');
        }
        else{
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }

        if (errors.length > 0) {
            
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
        }
        else{
            Swal.fire({
                icon: 'success',
                text: 'Cambios realizados!',
            })
            .then( ()=> {
                form.submit()
            })
        }
        
    }
)})