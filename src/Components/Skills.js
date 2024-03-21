import frontend from "../assets/img/frontend.svg";
import backend from "../assets/img/backend.svg";
import c from "../assets/img/c.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import java from "../assets/img/java.svg";
import android from "../assets/img/android.svg";
import python from "../assets/img/python.svg";
import sql from "../assets/img/sql.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>In the ever-evolving landscape of technology, I've honed a versatile set of skills that blend innovative design with robust engineering. From front-end frameworks that make websites come to life to back-end systems that support them. Explore my skills and see how they have come together in my projects.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={frontend} alt="Image" />
                                <h5>Front-End Development</h5>
                            </div>
                            <div className="item">
                                <img src={backend} alt="Image" />
                                <h5>Back-End Development</h5>
                            </div>
                            <div className="item">
                                <img src={android} alt="Image" />
                                <h5>Android Development</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
