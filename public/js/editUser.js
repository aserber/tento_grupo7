window.addEventListener("load", function(){

    let form = document.querySelector(".form");
        form.name.focus();
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = [];
        let name = document.querySelector('#name');
        let last_name = document.querySelector('#last_name');
        let avatar = document.querySelector('#avatar');
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

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
        
        /// VALIDACION imagen 

        if (!allowedExtensions.test(avatar.value)) {
            errors.push('El campo imagen  debe tener al menos 8 caracteres!');
            avatar.classList.add('is-invalid');
        }
        else{
            avatar.classList.add('is-valid');
            avatar.classList.remove('is-invalid');
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
        }

        else{
            Swal.fire({
                icon: 'success',
                text: 'Registrado!',
            })
            .then( ()=> {
                form.submit()
            })
        }
        
    }
)})