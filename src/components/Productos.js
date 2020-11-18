import React, { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
            <h2>Listado de productos</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Nombre producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
}

export default Header;