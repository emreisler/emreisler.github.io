import "../assets/vendors/themify-icons/css/themify-icons.css"
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

export default function About() {
    const iconStyle = { marginRight: "10px", fontSize: "1.5rem" };

    return (
        <div id="about" className="container-fluid">
            <div  className="row about-section">
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Who am I ?</h3>
                    <span className="line mb-5"></span>
                    <h5 className="mb-3">A Software Engineer Located In Our Lovely Earth</h5>
                    <p className="mt-20">Experienced Software Engineer with a strong background in distributed system architecture. Skilled
                        in crafting robust and scalable solutions, adept at optimizing performance within complex
                        environments.</p>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Personal Info</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Birthdate</span> : 14/01/1989</li>
                        <li><span>Email</span> : emre.isler.9@gmail.com</li>
                        <li><span>Phone</span> : +90 535 496 90 70</li>
                        <li><span>Address</span> : Yenimahalle/ANKARA</li>
                    </ul>
                    <ul className="social-icons pt-3">
                        <li>
                            <a href="https://github.com/emreisler" target="_blank" rel="noopener noreferrer">
                                <FaGithub style={iconStyle}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/emre-işler-987b5b76" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin style={{...iconStyle, color: "#0077B5"}}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@emre.isler.9" target="_blank" rel="noopener noreferrer">
                                <FaMedium style={{...iconStyle, color: "#00ab6c"}}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">My Expertise</h3>
                    <span className="line mb-5"></span>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Full-Stack Web Development</h6>
                            <p className="subtitle">Extensive experience in building dynamic, user-friendly web
                                applications using React for the front end and Java, Spring Boot, and Go for backend
                                services.</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Software Design</h6>
                            <p className="subtitle"> Extensive experience in designing distributed systems with a focus
                                on scalability, fault tolerance, and high availability.</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Cloud Infrastructure & Automation</h6>
                            <p className="subtitle">Proficient in deploying applications to cloud platforms (Azure,
                                AWS), leveraging containerization technologies like Docker and Kubernetes for
                                orchestration.</p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}