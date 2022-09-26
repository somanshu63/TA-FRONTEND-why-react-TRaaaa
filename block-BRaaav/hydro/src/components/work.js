import workImage1 from '../assets/work-image1.jpg'
import workImage2 from '../assets/work-image2.jpg'
import workImage3 from '../assets/work-image3.jpg'
import workImage4 from '../assets/work-image4.jpg'


function Work(props) {
    return (
        <section className="work padding">
            <div className="container">
            <header className="sec-header text-center">
                <h2 className="heading">Our Work</h2>
                <div className="dot-wrapper">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                </div>
            </header>
            <div className="flex">
                <div className="flex-23">
                <img
                    className="flexible-img"
                    src={workImage1}
                    alt="Work 1"
                />
                </div>
                <div className="flex-23">
                <img
                    className="flexible-img"
                    src={workImage2}
                    alt="Work 1"
                />
                </div>
                <div className="flex-23">
                <img
                    className="flexible-img"
                    src={workImage3}
                    alt="Work 1"
                />
                </div>
                <div className="flex-23">
                <img
                    className="flexible-img"
                    src={workImage4}
                    alt="Work 1"
                />
                </div>
            </div>
            </div>
        </section>
    )
}

export default Work;