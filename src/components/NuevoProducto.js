import React, { Fragment } from 'react';

const NuevoProducto = () => {
    return (
        <Fragment>
            <div className="row justify-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 font-weight-bold">
                                Agregar nuevo producto
                            </h2>
                            <form>
                                <div className="form-group">
                                    <label>Nombre productos</label>
                                    <input type="text" className="form-control"
                                        placeholder="Nombre producto" name="nombre" />
                                </div>
                                <div className="form-group">
                                    <label>Precio productos</label>
                                    <input type="text" className="form-control"
                                        placeholder="Precio Producto" name="precio" />
                                </div>
                                <button type="submit" className="btn-block ">Agregar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default NuevoProducto;