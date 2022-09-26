import propTypes from 'prop-types';
import articles from '../data'

function App(props){
    return (
        [
            <Header />,
            <main>
                <Hero />
                <Articles />
            </main>,
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
        <section className="articles">
            <h1>Articles</h1>
            <div className="flex">
                {
                    articles.map((article) => <Article key={article.publishedAt} {...article} />)
                }
            </div>
        </section>
    )
}

function Article(props) {
    return(
        <div className='article'>
            <img src={props.urlToImage} alt={props.title}></img>
            <div className='padding-1'>
                <h3 className='title'>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.url}>view more info</a>
            </div>
        </div>
    )
}
Article.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    urlToImage: propTypes.string.isRequired,
    url: propTypes.string.isRequired
}

function Footer(props) {
    return (
        <div className='footer flex'>
            <small>2020 All Rights Reserved</small>
            <div className='flex'>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
    )
}


export default App;