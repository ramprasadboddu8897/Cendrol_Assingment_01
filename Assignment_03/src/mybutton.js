function MyButton(props) {
  const isTrue = props.isTrue;

  return (
    <button style={{ backgroundColor: isTrue ? "red" : "blue" }}>
      Click me!
    </button>
  );
}
export default MyButton;
