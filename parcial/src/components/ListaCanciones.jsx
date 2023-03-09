import { useState } from 'react'

export const ListaCanciones =  (props)=> {
    const [item, setItem] = useState('')
    const [item2, setItem2] = useState('')

    function handleChange(e){
        const valor = e.target.value.trim()
        if(/[^a-zA-Z]/.test(valor)) 
        return

        const lengthItem = e.target.value.length()
        if(item.length <3){
            console.error('nombre Incorrecto')
            item.test(lengthItem)
        }
        setItem(valor)
    }


    function handleSubmit(e) {
      e.preventDefault()
      if (!item){
        console.error('nombre invalido')
      }
      console.log('cargando',item);
      setItem(item);

      if(!item2){
        console.error('genero vacio')
      }
      console.log(item2)
      setItem2
    }


    return (
      <>
        <h3>Lista de canciones</h3>
        <form className='flex' onSubmit={handleSubmit}>
        <p>Ingrese una cancion</p>
        <input
          type='text'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <p>Ingrese el genero</p>
        <input
          type='text'
          value={item}
          onChange={handleChange}
        />
        <hr />
        <button type='submit'>Agregar</button>
        </form>
        <p>{item}</p>
        <p>{item2}</p>
      </>
    )
  }

