import colors from "../data.js";

function App(props) {
  const keys = Object.keys(colors);
  return keys.map((key) => <Color info={colors[key]} name={key} />);
}

function Color(props) {
  return (
    <>
      <div className="flex">
        <div className="colorheading width-20">
          <h3 className="title">{props.name}</h3>
          <p>colors.{props.name}</p>
        </div>
        <div className="flex width-80 colorshades">
          {props.info.map((color, i, a = 100) => {
            return (
              <div className="wrapper">
                <div className="color" style={{ backgroundColor: color }}></div>
                <div className="flex colortext">
                  <span className="range">{(i + 1) * 100}</span>
                  <span className="colorcode">{color}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
