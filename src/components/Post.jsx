export function Post (props) {
    const {name, cb} = props;
    return <h2 onClick={cb}>{name}</h2>
}