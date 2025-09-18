import { NavLink } from "react-router-dom"
import { CartWidget } from "./CartWidget"
import { SearchBar } from "./SearchBar"

export const NavBar = () => {

    return (
        <>
            <header>

                <div className="header-top">
                    <div className="header-center">
                        <NavLink to='/'>
                            <img src="../logo.png" alt="Logo Patio" />
                        </NavLink>
                    </div>

                    <div className="header-right">
                    <SearchBar />
                    <CartWidget />
                    </div>
                </div>

                <nav className="nav-menu">
                    <ul className="nav-list">
                        <li id="category-all" className="nav-item">
                            <NavLink to='/' className="nav-link">Ver todo</NavLink>
                        </li>
                        <li id="category-vajilla" className="nav-item">
                            <NavLink to='/categories/cocina' className="nav-link">Cocina</NavLink>
                        </li>
                        <li id="category-cocina" className="nav-item">
                            <NavLink to='/categories/deco' className="nav-link">Deco</NavLink>
                        </li>
                        <li id="category-deco" className="nav-item">
                            <NavLink to='/categories/textiles' className="nav-link">Textiles</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

