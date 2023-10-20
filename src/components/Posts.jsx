import { Post } from "./Post";

export function Posts(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <Post key={post.id} name={post.name} cb={props.cb} cb1={props.cb1} id={post.id} />
      ))}
    </div>
  );
}
