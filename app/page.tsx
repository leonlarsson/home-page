import Link from "next/link";

import "/public/assets/css/main.css";

export default () => {
    return (
        <div id="wrapper">
            <section id="main">
                <span className="avatar"><img className="avatar" src="/assets/images/avatar.png" width={150} height={150} alt="Avatar" /></span>
                <h1>Leon San José<br />Larsson</h1>
                <p>
                    <a title="Sharkmob" href="https://sharkmob.com" target="_blank">Sharkmob AB</a>
                    <br />
                    Sweden
                </p>

                <ul className="icons">
                    <li>
                        <a title="Email" id="email" href="mailto:leonlarsson8@gmail.com" target="_blank" className="fas fa-envelope">Email</a>
                    </li>
                    <li><a title="LinkedIn" id="linkedin" href="https://www.linkedin.com/in/leonlarsson/" target="_blank"
                        className="fab fa-linkedin-in">LinkedIn</a></li>
                    <li><a title="Twitter" id="twitter" href="https://twitter.com/MozzyFX" target="_blank"
                        className="fab fa-twitter">Twitter</a></li>
                    <br />
                    <li><a title="GitHub" id="github" href="https://github.com/leonlarsson" target="_blank"
                        className="fa-brands fa-github">GitHub</a></li>
                    <li><a title="Behance" id="behance" href="https://www.behance.net/leonlarsson" target="_blank"
                        className="fab fa-behance">Twitter</a></li>
                    <li><a title="ArtStation" id="artstation" href="https://www.artstation.com/leonlarsson" target="_blank"
                        className="fab fa-artstation">Twitter</a></li>
                </ul>

                <hr />
                <ul style={{ textAlign: "left", margin: 0 }}>
                    <li><Link title="Projects" href="/projects">Projects</Link></li>
                    <li><a title="English CV" href="/cv">Resume</a></li>
                    <li><a title="Swedish CV" href="/cv-swe">Resume Swedish</a></li>
                    <br />
                </ul>
            </section>
        </div>
    );
};