function Button(props) {
  console.log(props);

  return <button onClick={props.fnCreate}>Add Todo</button>;
}

export default Button;
