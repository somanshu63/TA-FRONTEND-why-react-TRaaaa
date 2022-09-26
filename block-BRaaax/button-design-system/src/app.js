import "./app.css";
import Button from "./button";
import { buttonSize, buttonType } from "./buttonInfo";

function App(props) {
  return (
    <div className="app">
      <Button label="click me" type={buttonType.PRIMARY} />
      <Button label="click me" size={buttonSize.LARGE} />
      <Button label="click me" disabled />
      <Button label="click me" onClick={() => alert("hello")} />
    </div>
  );
}

export default App;
