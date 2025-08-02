import { CartWidget } from "./CartWidget"

export const NavBar = () => {

    return (
        <>
            <header>

                <div className="header-top">
                    <div className="header-logo">
                        <a><img src="../logo.png" alt="Logo Patio" /></a>
                    </div>

                    <nav className="nav-menu">
                        <ul className="nav-list">
                            <li id="category-all" className="nav-item">
                                <a href="#" className="nav-link">Ver todo</a>
                            </li>
                            <li id="category-vajilla" className="nav-item">
                                <a href="#" className="nav-link">Vajilla</a>
                            </li>
                            <li id="category-cocina" className="nav-item">
                                <a href="#" className="nav-link">Cocina</a>
                            </li>
                            <li id="category-deco" className="nav-item">
                                <a href="#" className="nav-link">Deco</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <CartWidget/>

            </header>
        </>
    )
}

