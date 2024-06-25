    var archivo = document.getElementById("archivo");
    var cargar = document.getElementById("cargar");
    var identificar = document.getElementById("identificar");
    var imagen = document.getElementById("imagen");
    var contenido = document.getElementById("contenido");

    archivo.addEventListener("change", function(){myarchivo(imagen);});
	
    cargar.addEventListener("click", load);

    identificar.addEventListener("click", function(){enviar(imagen.src,contenido)});


    function enviar(imagen,contenido){

        const options={
            method: 'POST',
            headers: {
                
              "Api-Key": "I63mNli4d4WzMfk9qdiP3KyfrjnfXtX8IXgziRXKw7SvT87v36",
              "Content-type": "application/json"
        
            },
            body: JSON.stringify({
                "images": [
                    imagen
                ],
                "latitude": 49.207,
                "longitude": 16.608,
                "similar_images": true
            })
        }
        
        
        fetch('https://insect.kindwise.com/api/v1/identification', options)
        .then(function(response) { return response.json() })
          .then(function(data) {
            renderizar(data,contenido);
          })
        
        
    }
    
    function renderizar(datos,contenido){
    
        let lista=datos.result.classification.suggestions;
        
        var listaColumnas="";
    
        lista.forEach(element => {

        let nombre=element.name;
        let imagen= element.similar_images[0].url_small;


        let inicioimg="<img src=";
        let finimg="  width='100px' height='100px' alt='...'>";
        

        let auximg=inicioimg+"'"+imagen+"'"+finimg;

        let iniciodivcol="<div class='col'>";
        let iniciodiv="<div class='container'>";
        let iniciodivrow="<div class='row'>";
        let findiv="</div>";

        let alias="<input id='especie' type='hidden' name='especie' value="+"'"+nombre+"'"+"/>"
      
        
        let auxrow=iniciodivrow+auximg+findiv;
        let auxrow2=iniciodivrow+nombre+findiv;

        let auxcontainer=iniciodiv+auxrow+auxrow2+alias+findiv;

        let auxcol=iniciodivcol+auxcontainer+findiv;

        listaColumnas+=auxcol;
        
            
        });

        contenido.innerHTML =listaColumnas;
    
    }