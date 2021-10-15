export default function Wrapper(props) {
    const { children, className } = props;
    return (
        <div
            className="wrapper"
        >
            {children}
        </div>
    )
}