function Button(props) {
  var { type = "button--primary", size = "button-medium" } = props;
  return (
    <button
      className={`button ${type} ${size}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label || "button"}
    </button>
  );
}

export default Button;
