//seleciona el boton calcular y le agrega el evento de "click"
let bt_calcular = document.getElementById("calcular")
bt_calcular.addEventListener("click", ()=>{
    determinarCoordinador()
    totalFinal()
})

/**
 * 1) Funcion para calcular que coordinador se encargara de la venta 
 */
function determinarCoordinador(){
    //toma la opcion eleguida del usuario de la zona
    let zona = document.getElementById("zona").value
    let coordinador ;
    switch (zona) {

            case "Interior Sur":
            coordinador = "Ricardo Sánchez";
            break;
            case "Buenos Aires Sur":
            coordinador = "Ricardo Sánchez";
            break;
            case "Buenos Aires Centro":
              coordinador = "Humberto Vélez";
              break;
            case "Interior Norte":
              coordinador = "Néstor Muños";
              break;
            case "Interior Este":
              coordinador = "Luis Alberto Fariño";
              break;
            default:
              coordinador = "No se ha seleccionado una zona válida";
              break;
    }
    alert("El coordinador de tu compra va a ser " + coordinador);
}

/**  
 * 2) Funcion para calcular el total de la compra
 */
function totalFinal(){
    //recorre la lista de unidades de madera y guarda los valores numericos en el arreglo "maderas"
    let maderas = []
    document.getElementsByName("madera[]").forEach(l => 
        {
        maderas.push(parseInt(l.value))
        });

    let tipo = document.getElementById('tipo').value
    let precioPorUnidad;
    let costologistico = 0;
    switch (tipo) 
    {
        case "algarrobo":
          precioPorUnidad = maderas.length < 200 ? 1000 : 900;
          break;
        case "pino":
          precioPorUnidad = maderas.length < 500 ? 800 : 850;
          break;
        case "acacia":
          precioPorUnidad = maderas.length < 100 ? 1500 : 1450;
          break;
        default:
          precioPorUnidad = 0;
          break;
      }
    let total = precioPorUnidad *maderas.length;

    if(maderas.length>=500) 
    {
      let cantidadCostosLogisticos = Math.floor(maderas.length/500);
      costoLogistico = cantidadCostosLogisticos * 5000;
    }
    let totalFinal = total + costoLogistico;

  let clienteFinal = document.getElementById("cliente-final").checked;
  if (clienteFinal) 
  {
    totalFinal *= 1.21; // Aplica el incremento del 21% para clientes finales
  }
    alert("El total es de:"+ totalFinal);

}