import articles from '../data'

function App(props){
    return (
        [
            <Header />,
            <Hero />,
            <Articles />,
            <Footer />
        ]
    )
}


function Header(props) {
    return (
        <div className="flex header">
            <a href="/" className="brand">Gizmo</a>
            <div className="flex">
                <a href="/">Home</a>
                <a href="/">about</a>
                <a href="/">contact</a>
            </div>    
        </div> 
    )
}


function Hero(props) {
    return (
        <div className="hero">
        </div>
    )
}

function Articles(props){
    return(
        <div className="articles">
            <h1>Articles</h1>
            <div className="flex">
                {
                    articles.map((article) => <Article info={article} />)
                }
            </div>
        </div>
    )
}

function Article(props) {
    return(
        <div className='article'>
            <img src={props.info.urlToImage} alt={props.info.title}></img>
            <div className='padding-1'>
                <h3 className='title'>{props.info.title}</h3>
            </div>
        </div>
    )
}

function Footer(props) {
    return (
        <div className='footer flex'>
            <small>2020 All Rights Reserved</small>
            <div className='flex'>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
    )
}


export default App;