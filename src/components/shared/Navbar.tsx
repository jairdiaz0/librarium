import reactLogo from '../../assets/react.svg'
function Navbar() {
    return (
        <nav className="navbar navbar-container">
            <div className="container-fluid">
                <img src="react.svg" alt="" />
                <img src={reactLogo} className="logo react" alt="React logo" />
                <a className="h1 navbar-title d-none d-sm-block">Librarium</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar