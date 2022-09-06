window.addEventListener("load", function(){

    let form = document.querySelector(".form");
    //form.name.focus();

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let errors = [];

        let name = document.querySelector('#name');
        let price = document.querySelector('#price');
        let discount = document.querySelector('#discount');
        let category = document.querySelector('#category');
        let description = document.querySelector('#description');
        let image = document.querySelector('#file');
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
        /// VALIDACION Precio
        if (price.value.length < 2 ) {
            errors.push('El campo apellido no puede tener menos de dos caracteres!');
            price.classList.add('is-invalid');
        }
        else{
            price.classList.add('is-valid');
            price.classList.remove('is-invalid');
        }
        /// VALIDACION discount
        if (discount.value.length < 2 ) {
            errors.push('El campo apellido no puede tener menos de dos caracteres!');
            discount.classList.add('is-invalid');
        }
        else{
            discount.classList.add('is-valid');
            discount.classList.remove('is-invalid');
        }
         /// VALIDACION category
       // if (discount.value.length < 2 ) {
       //    errors.push('El campo apellido no puede tener menos de dos caracteres!');
       //    discount.classList.add('is-invalid');
       //}
       //else{
       //    discount.classList.add('is-valid');
       //    discount.classList.remove('is-invalid');
       //}
        //VALIDACION description
       if (description.value.length < 2 ) {
          errors.push('El campo apellido no puede tener menos de dos caracteres!');
          description.classList.add('is-invalid');
      }
      else{
          description.classList.add('is-valid');
          description.classList.remove('is-invalid');
      }
        // VALIDACION imagen 

        if (!allowedExtensions.test(image.value)) {
            errors.push('El campo imagen y la concha de tu hermana debe tener al menos 8 caracteres!');
            image.classList.add('is-invalid');
        }
        else{
            image.classList.add('is-valid');
            image.classList.remove('is-invalid');
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
                text: 'Revise los estabien!',
            })
        }
        
    }
)})