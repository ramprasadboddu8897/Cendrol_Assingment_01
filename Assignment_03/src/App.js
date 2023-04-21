import "./styles.css";
import MyButton from "./mybutton";

export default function App() {
  return (
    <div className="App">
      <MyButton isTrue={true} />
      <br />
      <MyButton isTrue={false} />
    </div>
  );
}
