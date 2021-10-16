import Header from "./Header";

export default function PageScheme(props) {
    const { children, menus } = props;
   
    return (
        <main className="main">
            <Header menus={menus} />
            <style jsx>
                {`
                    .main {
                        position: relative;
                        display: flex;
                        width: 100%;
                        height: 70px;
                    }
                `}
            </style>
        </main>
    )
}