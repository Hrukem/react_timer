export function Post(props) {
  const { name, cb, cb1, id } = props;

  // return <h2 onClick={cb}>{name}</h2>
  return (
    <h2 onClick={cb}>
      {name}
      <div>
        <button onClick={() => cb1(id)}>Delete</button>
      </div>
    </h2>
  );
}
