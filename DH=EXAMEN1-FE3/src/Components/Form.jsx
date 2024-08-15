import React, { useState } from 'react'
import Card from './Card'


const Form = () => {
    const [name, setName] = useState("")
    const [comida, setComida] = useState("")
    const [alertMessage, setalertMessage] = useState("")

    // Valida el input
    const validateInput = (dato1, dato2) => {

        let resultado = 0
        console.log("AAAAAAAAAAAAAAA")
        console.log(dato1)

        let estado1 = revisarDato1(dato1)
        let estado2 = revisarDato2(dato2)

        if (estado1 && estado2){
            resultado = 0
            return resultado
        } else if (estado1 && !estado2) {
            return resultado = 2
        }else if (!estado1 && estado2) {
            return resultado = 1
        }else {
            return resultado = 3
        }
        


    }

    const revisarDato1 = (dato1) => {
        // revision dato1: 3char y no spacio
        let value = dato1.trim();

        if (value.length >= 3 && !/^\s/.test(dato1)){
            console.log("El dato 1 esta ok")
            return true
        }
        else {
            console.log("Dato 1 malo")
            return false
        }
    }

    const revisarDato2 = (dato2) => {
        console.log(dato2)
        let value2 = dato2.trim();

        if (value2.length >= 6){
            console.log("El dato 2 esta ok")
            return true
        }
        else {
            console.log("Dato 2 malo")
            return false
        }
    }



    const handleSubmit = (e) => {
      e.preventDefault();
      
      let result = validateInput(name, comida)


      if (result === 0){
        setalertMessage(`Gracias por informarnos que tu comida favorita es ${comida}`)
      }else if (result ===1){
        setalertMessage(`El primer valor no puede tener espacios al inicio ni ser de menos de 3 letras`)
      }else if (result ===2){
        setalertMessage(`El segundo valor no puede ser de menos de 6 letras`)
      }else if (result ===3){
        setalertMessage(`- El primer valor no puede tener espacios al inicio ni ser de menos de 3 letras -El segundo valor no puede ser de menos de 6 letras`)
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Comida: </label>
          <input
            type="text"
            value={comida}
            onChange={(e) => setComida(e.target.value)}
          />
          <button> Enviar informacion </button>
        </form>
        <Card message = {alertMessage}/>
      </div>
    );
}

export default Form
