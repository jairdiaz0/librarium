import { useState } from "react";

function BookCard(props: any) {
    const { book, changeQuantity, changeBookSelected } = props;
    const [value, setValue] = useState(1)
    return (
        <div className="col-12 col-lg-6 mt-5">
            <div className="card text-center">
                <div className="card-header p-4 h5 d-flex justify-content-between">
                    <div>
                    {book.title}
                    </div>
                    <div className="modify" data-bs-toggle="modal" data-bs-target="#modalEdit" onClick={()=>{changeBookSelected(book)}}>
                        🔨
                    </div>
                </div>
                <div className="row g-0 align-items-center">
                    <div className="col-4">
                        <img src={book.src} className="card-img-top p-4" alt="..." />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <p className="card-text">{book.synopsis}</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    <div className="justify-content-around d-flex">
                        <button className='btn btn-outline-success' onClick={() => changeQuantity(book, value)}>Agregar</button>
                        <div className="row justify-content-center">
                            <div className="col-8 col-md-12">
                            <input className="form-control text-center" min={1} type="number" name="value" id="value" value={value} onChange={(e) => { setValue(Number(e.target.value)) }} />
                            </div>
                        </div>
                        <button className='btn btn-outline-danger' onClick={() => changeQuantity(book, -value)}>Eliminar</button>
                    </div>
                    <hr />
                    <div className="fw-bold">
                        <p className="list-group-item text-danger">Quedan {book.quantity} piezas</p>
                        <hr />
                        <p className="list-group-item text-success">Precio: ${book.price}</p>
                        <hr />
                        <p className="list-group-item text-dark">Unidades vendidas: {book.sold}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard