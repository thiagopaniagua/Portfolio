const Tecnologias = () => {
    return (
        <> <div className="row">
            <div className="col-7"><h1 className="mt-2 text-start psbo4">Tecnologias que uso</h1></div>
            <div className="col-5"> <h2 className="mt-3  psbo5">Contactame</h2></div>
        </div>


            <div className="proyectoss mt-2"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7 mt-4 tecno">
                        <div className="row">
                            <div className="col-2 m-2">
                                <p className="ptecno">ReactJS</p>
                                <img src="https://img.icons8.com/?size=80&id=047WZAFDnkVp&format=png" alt="" className="imgtecno" />
                            </div>
                            <div className="col-2 m-2">
                                <p className="ptecno">NodeJS</p>
                                <img src="https://img.icons8.com/?size=32&id=FQlr_bFSqEdG&format=png" alt="" className="imgtecno" />
                            </div>
                            <div className="col-2 m-2">
                                <p className="ptecno">Mongodb</p>
                                <img src="https://img.icons8.com/?size=80&id=OdTjgPoHJeaK&format=png" alt="" className="imgtecno" />
                            </div>
                            <div className="col-2 m-2">
                                <p className="ptecno">Express</p>
                                <img src="https://img.icons8.com/?size=50&id=kg46nzoJrmTR&format=png" alt="" className="imgtecno" />
                            </div>
                            <div className="col-2 m-2">
                                <p className="ptecno">FireBase</p>
                                <img src="https://img.icons8.com/?size=80&id=5pr1cz6sq9qI&format=png" alt="" className="imgtecno" />
                            </div>
                            <div className="col-2 m-2">
                                <p className="ptecno">Bootstrap</p>
                                <img src="https://img.icons8.com/?size=50&id=OODqBWCdRF8o&format=png" alt="" className="imgtecno" />
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <form className="form mt-4">

                            <div data-mdb-input-init className="form-outline mb-2">
                                <input type="text" id="form4Example1" className="form-control" />
                                <label className="form-label" htmlFor="form4Example1">Name</label>
                            </div>


                            <div data-mdb-input-init className="form-outline mb-2">
                                <input type="email" id="form4Example2" className="form-control" />
                                <label className="form-label" htmlFor="form4Example2">Email address</label>
                            </div>


                            <div data-mdb-input-init className="form-outline mb-2">
                                <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                                <label className="form-label" htmlFor="form4Example3">Message</label>
                            </div>
                            <button data-mdb-ripple-init type="button" className="btn btn-dark btn-block mb-3">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tecnologias;