import React, {useState} from "react";
import uniq from "uniq";


const Listado = () => {

    const [nombre, setNombre] = useState('')
    const [ListadoNombres, setListadoNombres] = useState([])
    
    const addNombre = (e)=>{
        e.preventDefault()
        const newNombre ={
            id:uniq(),
            tituloNombre:nombre
        }
        setListadoNombres([...ListadoNombres,newNombre])
        console.log(newNombre)
    }
    
    return (
        <div>
            <h1>CRUD Basico</h1>
            <div className="row">
                <div className="col">
                    <h2>Listado De Nombres</h2>
                </div>
                <div className="col">
                    <h2>registro</h2>
                    <form onSubmit= {(e)=> addNombre(e)}>
                        <input onChange={(e)=>{setNombre(e.target.value)}} type="text" placeholder="Introduce Tu Nombre"/>
                        <input type="submit" value="Registrar Nombre"/>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Listado;