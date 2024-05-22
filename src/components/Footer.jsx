const Footer = () => {
    return(
        <>
          <footer className="foot mt-4">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>Navegación</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="">Inicio</a></li>
                            <li><a href="#about" className="">Sobre mí</a></li>
                            <li><a href="#projects" className="">Proyectos</a></li>
                            <li><a href="#contact" className="">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Contacto</h5>
                        <p>Email: <a href="mailto:thiago@example.com" className="">thiago@example.com</a></p>
                        <p>Teléfono: <a href="tel:+123456789" className="">+123 456 789</a></p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Redes Sociales</h5>
                      
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center mt-3">
                        <p>Muchas gracias por ver.</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};
export default Footer;
