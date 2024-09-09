import { Link } from "react-router-dom";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
    return (
        <div>
            <header>
                <ul>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/personajes">Personajes</Link></li>
                    <li><Link to="/detalle-personaje">Detalle Personajes</Link></li>
                    <li><Link to="/about">About Page</Link></li>
                   
                </ul>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    )
};