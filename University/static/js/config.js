const $formularioCurso = document.getElementById("formularioCurso");
const $txtNombre = document.getElementById("txtNombre");
const $index = document.getElementById("index")
const btnsEliminacion = document.querySelectorAll('.btnEliminacion');

(function() { 
    
    notificacionSwal(document.title, 'Cursos Listados con exito', 'succes', 'ok')

    $formularioCurso.addEventListener('submit', function(e){

        let nombre = String($txtNombre.value).trim();
        if(nombre.length === 0){
            alert("Ingresa un curso");
            e.preventDefault();
        }
        

    });

    btnsEliminacion.forEach(btn =>{
        btn.addEventListener('click', function(e){
            let confirmacion = confirm("confirma realmente elimanr curso");
            if(!confirmacion){
                e.preventDefault();
            }
        })
    })

})();