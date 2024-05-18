const Encabezado = () => {
    return (
        <div className="container my-1 encabezado">
            <div className="row align-items-center">
                <div className="col-12">
                    <h1 className="text-center">MI PORTFOLIO</h1>
                    <p className="text-center pb-2 subtitulen">Programador full stack JR</p>
                </div>
                <div className="col-12">
                    <img className="img-fluid imgEn mb-3" src="https://p4.wallpaperbetter.com/wallpaper/883/36/901/city-manhattan-new-york-city-street-wallpaper-preview.jpg" alt="" />
                </div>
                <div className="row">
                    <div className="col-5 text-start psbo2">
                        <h2 className="">Soy Thiago Paniagua</h2>
                        <p>30/01/05</p>
                    </div>
                    <div className="col-4 offset-3 text-end psbo3">
                        <p className="psob">Programador full stack con conocimientos en MERN. Me gusta la programación, me gusta progresar y aprender en este largo viaje.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Encabezado;
