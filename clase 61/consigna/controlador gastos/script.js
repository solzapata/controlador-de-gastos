// Controlador de gastos: hacer un programa que permita agregar ingresos y gastos, el programa debe mostrarlos de forma distinta (con colores que los diferencien) y mostrar el total hasta el momento (suma de ingresos menos suma de gastos). BONUS POINT: permitir ingresar una fecha a la hora de agregar ingreso o gasto, y permitir filtrar por mes/año
const $ = elemento => document.querySelector(elemento)
const btnIngreso = $(".btn-ingreso")
const btnGasto = $(".btn-gasto")
const textosIngresados = $(".textos-ingresados")
const montoIngresos = $(".monto-ingresos")
const montoGastos = $(".monto-gastos")
const montoTotal = $(".monto-total")

let montoInicialIngreso = 0
let montoInicialGasto = 0
let montoInicialTotal = 0

const ingresoAgregado = () => {
    const mensaje = prompt("Escriba el título del ingreso:")        //pedir que ingrese
    const monto = prompt("Escriba el monto del ingreso:")

    const mensajeFinal = document.createElement("p")                //creo un elemento p al que le agrego el msj y lo asigno al div
    mensajeFinal.innerHTML = `-${mensaje} $${monto}\n`               
    textosIngresados.appendChild(mensajeFinal)
    mensajeFinal.style.color = "green"

    montoInicialIngreso += Number(monto)                            //sumo todos los ingresos y creo elemento p
    montoIngresos.innerHTML = `<p class="ingreso">Monto total de ingresos: $${montoInicialIngreso}</p>`

    montoInicialTotal += Number(monto)                              //sumo al total y lo mando a un p
    montoTotal.innerHTML = `<p>Monto final: $${montoInicialTotal}</p>`
}

btnIngreso.addEventListener("click", ingresoAgregado)

const gastoAgregado = () => {
    const mensaje = prompt("Escriba el título del gasto:")
    const monto = prompt("Escriba el monto del gasto:")

    const mensajeFinal = document.createElement("p")                
    mensajeFinal.innerHTML = `-${mensaje} $${monto}\n`               
    textosIngresados.appendChild(mensajeFinal)
    mensajeFinal.style.color = "red"

    montoInicialGasto += Number(monto)
    montoGastos.innerHTML = `<p>Monto total de gastos: $${montoInicialGasto}</p>`

    montoInicialTotal -= Number(monto)
    montoTotal.innerHTML = `<p>Monto final: $${montoInicialTotal}</p>`
}

btnGasto.addEventListener("click", gastoAgregado)

