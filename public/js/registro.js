window.onload = function(){
    let name = document.querySelector('.moviesAddTitulo');
    //let formulario = document.querySelector('#formulario');
    //let article = document.querySelector('article');
    name.innerHTML = 'AGREGAR tuvieja';
    name.classList.add('titulo');


//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //


    let form = document.querySelector('.form');
    form.name.focus()

    form.onsubmit =  (e) => {
        e.preventDefault(e)

        let errors = []

        let name = document.querySelector('#name');
        let last_name = document.querySelector('#last_name');
        let password = document.querySelector('#password');
        let email = document.querySelector('#email');
        let avatar = document.querySelector('#file');
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        
        /// VALIDACION Nombre
        if (name.value.length < 2 ) {
            errors.push('El campo nombre no puede tener menos de dos caracteres!');
            name.classList.add('is-invalid');
        }
        else{
            name.classList.add('is-valid');
            name.classList.remove('is-invalid');
        }
        /// VALIDACION Apellido
        if (last_name.value.length < 2 ) {
            errors.push('El campo apellido no puede tener menos de dos caracteres!');
            last_name.classList.add('is-invalid');
        }
        else{
            last_name.classList.add('is-valid');
            last_name.classList.remove('is-invalid');
        }
        /// VALIDACION Email


        if (!regexEmail.test(email.value)){
            errors.push('el mail la concha de tu hermana!');
            email.classList.add('is-invalid');
        } 
        else{
            last_name.classList.add('is-valid');
            last_name.classList.remove('is-invalid');
        }

        
        /// VALIDACION imagen 

        if (!allowedExtensions.test(avatar.value)) {
            errors.push('El campo imagen y la concha de tu hermana debe tener al menos 8 caracteres!');
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
        let ulErrors = document.querySelector('.errores');
        ulErrors.classList.add('alert-warning')
        ulErrors.innerHTML = '';
        if (errors.length > 0) {
            Swal.fire({
                icon: 'error',
                
                text: 'Revise los errores!',
            })
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li > ${errors[i]} </li>`
            }
        }

        else{
            Swal.fire({
                icon: 'success',
                text: 'Revise los estabien!',
            })
        }
        
    }
}
