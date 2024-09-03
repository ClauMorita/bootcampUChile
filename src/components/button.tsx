interface ButtonProps {
    texto: string;
}

export function Button(props: ButtonProps) {
    return (
        <button>{props.texto}</button>
    )
}