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
    let zona = document.getElementById("zona").ariaValueMax

    alert("El coordinador de tu compra va a ser")
}

/**
 * 2) Funcion para calcular el total de la compra
 */
function totalFinal(){
    //recorre la lista de unidades de madera y guarda los valores numericos en el arreglo "maderas"
    let maderas = []
    document.getElementsByName("madera[]").forEach(l => {
        maderas.push(parseInt(l.value))
    })

    let tipo = document.getElementById('tipo').value

    let total = 0

    alert("El total es de:"+ total)

}