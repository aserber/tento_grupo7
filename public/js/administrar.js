window.addEventListener("load", function(){

    let form = document.querySelector(".form");
    
  
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            text: 'Cambios realizados!',
        })
        .then( ()=> {
            form.submit();
        })

    }
    

)})