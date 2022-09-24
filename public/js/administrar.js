window.addEventListener("load", function(){

    let form = document.querySelector(".form");
    //form.name.focus();

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.querySelector('#confirmar');
            
           
            Swal.fire({
                icon: 'success',
                text: 'Cambios realizados!',
            })
            .then( ()=> {
                form.submit()
            })
        }
        
    
)})