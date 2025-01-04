

const Alta= () => {
    return (
<div className="alta container mt-5 text-center" >
                <form action="Direccion" method="post">
                    
                    <label htmlFor="Nombre"> Nombre: </label>  <br />
                    <input type="text" name="nombre" className="contact" /> <br /><br />
                    
                    <label htmlFor="Direccion"> Precio:   </label> <br />
                        <input type="number" name="Email" className="contact" /> <br /> <br />
                    
                    <label htmlFor="Telefono"> Stock:  </label><br /> 
                        <input type="number" name="telefono" className="contact" /> <br /> <br />
                        
                    <label htmlFor="Texto"> Categoria:  </label><br />
                        <input type="text" name="Texto" className="contact" /> <br /> <br />  
                        
                    <label htmlFor="Texto"> Detalles:  </label><br />
                        <input type="text" name="Texto" className="contact" /> <br /> <br />
        
                        <input type="button" value="Enviar" className="boton" /><br />  
                                         
                </form>
            </div>
    );
}

export default Alta;