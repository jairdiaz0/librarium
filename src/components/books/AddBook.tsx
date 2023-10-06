import { useRef, useState } from 'react'
import BookForm from './BookForm';

function AddBook(props: any) {
    const formRef: any = useRef(null);
    const { addBook } = props;
    let defaultBook = {
        title: '',
        synopsis: '',
        quantity: 1,
        price: 100,
        sold: 0
    }
    const [book, setBook] = useState({ ...defaultBook })

    const handInformation = (e: any) => {
        const { name, value, files } = e.target;
        if (name === 'formFile') {
            setBook((prevState: any) => ({
                ...prevState,
                src: URL.createObjectURL(files[0]) // Crea un src temporal para la imagen
            }));
        } else {
            // Si es un campo de texto, actualiza el estado book con la nueva información
            setBook((prevState: any) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    function handButton(e: Event) {
        e.preventDefault();
        addBook(book);
        formRef.current.reset();
        setBook({ ...defaultBook });
    }
    return (
        <div className="row mt-5 justify-content-center">
            <div className="col-10">
                <BookForm bookSelected={book} title={'Agregar Libro'} formRef={formRef} handInformation={handInformation}></BookForm>
                <div className="d-flex justify-content-end mb-3">
                    <button type="submit" className="btn btn-outline-dark col-3"
                        onClick={(e: any) => { handButton(e) }}>Agregar</button>
                </div>
            </div>
        </div>

    )
}

export default AddBook