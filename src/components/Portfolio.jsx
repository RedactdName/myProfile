import { useState } from "react";
// import Project from "./Project";
import rainOnYourParade from '../assets/images/RainOnYourParade.jpg'
import fureverHomed from '../assets/images/FureverHomed.jpg'
import tinyskateshop from '../assets/images/tinyskateshop.jpg'
import socialNetworkAPI from '../assets/images/slides.jpg'
import passwordGenerator from '../assets/images/password-generator.jpg'
// import image from (`../../public/assets/images/${name.jpg})  

function Portfolio() {
    // Replace links with deployed projects and GitHub repos
    const [projects] = useState([
        {
            name: 'RainOnYourParade',
            image: rainOnYourParade,
            description: 'find local events and current forcast for the area those events are happening in',
            link: "not deployed",
            repo: "https://github.com/RedactdName/RainOnYourParade.git"
        },
        {
            name: 'FureverHomed', 
            image: fureverHomed,
            description: 'app to search for currently avaialable perts using petfinder API, save them to your profile',
            link: "https://fureverhomed-ce9f92bca93e.herokuapp.com/",
            repo: "https://github.com/ccoff1798/FureverHomed.git"
        },
        {
            name: 'tinyskateshop',
            image: tinyskateshop,
            description: 'ecommerce website for fingerboard business',
            link: "https://tinyskateshop.com/",
            repo: "https://github.com/ccoff1798/tinyskateshop.git"
        },
        {
            name: 'socialNetworkAPI',
            image: socialNetworkAPI,
            description: 'API for social network',
            link: "not deployed",
            repo: "https://github.com/RedactdName/socialNetworkAPI.git"
        },
        {
            name: 'password-generator',
            image: passwordGenerator,
            description: 'app to create unique passwords based on needed criteria',
            link: "not deployed",
            repo: "https://github.com/RedactdName/password-generator.git"
        },

    ]);
    return (
        <div className="m-5">
            <div className="project-container">
                {projects.map((project, idx) => (
                    <div className="project" key={project.name}>
                        <img src={project.image} className="project-img" alt={project.name} />
                        <div>
                            <h3>
                                <a href={project.deploy}>{project.name}</a>
                            </h3>
                            <span>
                                <a href={project.gitrepo}><i className="fab fa-github"></i></a>
                            </span>
                            {/* <p>{project.description}</p> */}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};
export default Portfolio;

