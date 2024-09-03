interface PeliculasProps {
    titulo: string;
    resumen: string;
    imagen: string;
    enlace: string;
}

export const Peliculas = (props: PeliculasProps) => {
    return (
        <section>
            <aside>
                <a href={props.enlace}>
                    <img src={props.imagen} alt="imagen-pelicula" />
                </a>
            </aside>
            <section>
                <div>
                    <h1><a href={props.enlace}>{props.titulo}</a></h1>
                </div>
                <div>
                    <div>{props.resumen}</div>
                </div>
            </section>
            <section>
                <button>Visto o no visto</button>
            </section>
        </section>
    )
}