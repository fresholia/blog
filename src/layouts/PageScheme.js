import Header from "./Header";

export default function PageScheme(props) {
    const { children, menus } = props;
   
    return (
        <Header menus={menus} />
    )
}