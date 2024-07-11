class Personas{
    constructor(nombre, ingreso){
        this.nombre = nombre,
        this.ingreso = ingreso
    }
}

class Ingresos{
    constructor(){
        this.ingreso_menor = 0,
        this.acumuladorIngreso = 0,
        this.contadorPersonas = 0
    }
    procesarIngresos(p){
        this.acumuladorIngreso += p.ingreso
        this.contadorPersonas++
        if(this.ingreso_menor === 0 || p.ingreso < this.ingreso_menor){
            this.ingreso_menor = p.ingreso
        }
    }
    ingresoPromedio(){
        return this.acumuladorIngreso / this.contadorPersonas
    }
}

let persona1 = new Personas('Mary', 150)
let persona2 = new Personas('José', 135)
let persona3 = new Personas('Carlos', 160)
let persona4 = new Personas('Pedro', 75)

let ingreso = new Ingresos()

ingreso.procesarIngresos(persona1)
ingreso.procesarIngresos(persona2)
ingreso.procesarIngresos(persona3)
ingreso.procesarIngresos(persona4)

let salida = document.getElementById('app')
salida.innerHTML = `

Monto del ingreso menor: ${ingreso.ingreso_menor}<br>
Ingreso promedio: ${ingreso.ingresoPromedio()}$

`