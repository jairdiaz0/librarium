import { useEffect, useState } from 'react';
import BookForm from './BookForm';

function ModalEdit(props: any) {
    const { bookSelected, editBook, deleteBook } = props;
    const [book, setBook] = useState(bookSelected)

    useEffect(() => {
        setBook(bookSelected);
    }, [bookSelected])

    function handInformation(e: any) {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }
    function handButton(e: Event) {
        e.preventDefault();
        editBook(book);
    }
    return (
        <div className="modal fade" id="modalEdit" aria-labelledby="modalEditLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>{deleteBook(book)}}>Eliminar Libro</button>
                        <h5 className="ms-5 modal-title" id="modalEditLabel">Editar Información</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <BookForm hiddenImgFile handInformation={handInformation} bookSelected={book} title={'Modificar Libro'}></BookForm>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal" onClick={(e: any) => handButton(e)}>Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEdit