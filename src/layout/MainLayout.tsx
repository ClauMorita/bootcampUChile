interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
    return (
        <div>
            <header>
                <h1>Header</h1>
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