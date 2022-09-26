import fruits from '../data/data'

function handleChange() {
    alert('Hello React Event')
}

function handleHelp() {
    alert('To learn React use https://reactjs.org');
    alert('React and ReactDOM works together');
    alert('Babel helps in writing JSX');
}

function handleName(name) {
    alert(`Hello ${name}`)
}

function HandleName(props) {
    alert(`Hello ${props}`)
}

function handleFruit(fruit) {
    alert(fruit)
}

function App(props){
    return (
        <>
            <button onClick={handleChange}>Click Me</button>
            <button onClick={handleHelp}>How can I help you?</button>
            <button onClick={() => handleName('Arya')}>Arya</button>
            <button onClick={() => handleName('John')}>John</button>
            <button onClick={() => handleName('Bran')}>Bran</button>
            <button onClick={() => HandleName('Arya')}>Arya</button>
            <button onClick={() => HandleName('John')}>John</button>
            <button onClick={() => HandleName('Bran')}>Bran</button>
            {fruits.map((fruit) => <button key={fruit.id} onClick={() => handleFruit(fruit.value)}>{fruit.value}</button>)}
        </>
    )
}

export default App;