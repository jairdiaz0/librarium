import React, { useEffect, useState } from 'react'

function BookForm(props: any) {
    const { title, formRef, handInformation, bookSelected, hiddenImgFile } = props;

    let bookInfo = bookSelected;

    if (!bookInfo) {
        bookInfo = {
            title: '',
            synopsis: '',
            quantity: 1,
            price: 100,
            sold: 0,
            src: ''
        }
    }
    const [book, setBook] = useState(bookInfo);
    useEffect(() => {
        if (bookSelected) {
            setBook(bookSelected);
        }
    }, [bookSelected])
    return (
        <form className='row' ref={formRef}>
            <p className='h2 mb-4'>{title}</p>
            <div className="col-12">
                <div className="form-floating mb-3">
                    <input name='title' type="text" className="form-control" id="floatingBookTitle" placeholder="Book's Title"
                        value={book.title} onChange={(e: any) => { handInformation(e) }} />
                    <label htmlFor="floatingBookTitle">Titulo del Libro</label>
                </div>
            </div>
            {
                (!hiddenImgFile) &&
                <div className="col-12">
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Imagen del libro</label>
                        <input name='formFile' className="form-control" type="file" id="formFile" accept="image/*" onChange={(e: any) => { handInformation(e) }} />
                    </div>
                </div>
            }
            <div className="col-12">
                <div className="form-floating mb-3">
                    <input name='synopsis' type="text" className="form-control" id="floatingBookSynopsis" placeholder="Book's Synopsis"
                        value={book.synopsis} onChange={(e: any) => { handInformation(e) }} />
                    <label htmlFor="floatingBookSynopsis">Sinopsis del Libro</label>
                </div>
            </div>
            <div className="col-12 col-sm-6">
                <div className="form-floating mb-3">
                    <input name='quantity' type="number" min={1} className="form-control text-center" id="floatingBookQuantity" placeholder="Book's Quantity"
                        value={book.quantity} onChange={(e: any) => { handInformation(e) }} />
                    <label htmlFor="floatingBookQuantity">Cantidad de unidades</label>
                </div>
            </div>
            <div className="col-12 col-sm-6">
                <div className="form-floating mb-3">
                    <input name='price' type="number" min={1} className="form-control text-center" id="floatingBookPrice" placeholder="Book's Price"
                        value={book.price} onChange={(e: any) => { handInformation(e) }} />
                    <label htmlFor="floatingBookPrice">Precio por unidad en MXN</label>
                </div>
            </div>
            <div className="col-12 col-sm-6">
                <div className="form-floating mb-3">
                    <input name='sold' type="number" min={0} className="form-control text-center" id="floatingBookSold" placeholder="Book's Sold"
                        value={book.sold} onChange={(e: any) => { handInformation(e) }} />
                    <label htmlFor="floatingBookSold">Cantidad de unidades vendidas</label>
                </div>
            </div>
        </form>
    )
}

export default BookForm