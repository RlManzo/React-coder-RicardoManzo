import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Contacto = () => {
    const datosFormulario = React.useRef() 
    let navigate = useNavigate() 
    const consultarFormulario = (e) => {
        e.preventDefault()
        
        const datForm = new FormData(datosFormulario.current) 
        const contacto = Object.fromEntries(datForm) 
        console.log(contacto)
        e.target.reset()
        toast.success("Consulta recibida correctamente")
        navigate("/")
    }
  return (
    <div className="container" style={{marginTop:"20px"}}>
        <form onSubmit={consultarFormulario} ref={datosFormulario}>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
            <input type="text" className="form-control" name="nombre" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="celular" className="form-label">Numero telefonico</label>
            <input type="number" className="form-control" name="celular" required />
        </div>
        <div className="mb-3">
            <label htmlFor="consulta" className="form-label">Consulta</label>
            <textarea className="form-control" name="consulta" rows={3} defaultValue={""} required/>
        </div>

        <button type="submit" className="btn btn-danger">Enviar</button>
        </form>
    </div>
    
  )
}

export default Contacto;