import Header from './header';
import Hero from './hero';
import About from './introduction'
import Blog from './blog'
import Work from './work'
import Contact from './contact'
import Footer from './footer'
import '../styles/index.css'


function App(props) {
    return (
        <>
        <Header />
        <main>
            <Hero />
            <About />
            <Blog />
            <Work />
            <Contact />
        </main>
        <Footer />
        </>
    )
}

export default App;