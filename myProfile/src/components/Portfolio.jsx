import { useState } from "react";
// import Project from "./Project";
import image from '../../public/assets/images/tinyskateshop.jpg'
// import image from (`../../public/assets/images/${name.jpg})  

function Portfolio() {
    // Replace links with deployed projects and GitHub repos
    const [projects] = useState([
        {
            name: 'RainOnYourParade',
            image: '../assets/images/RainOnYourParade.jpg',
            description: 'find local events and current forcast for the area those events are happening in',
            link: "not deployed",
            repo: "https://github.com/RedactdName/RainOnYourParade.git"
        },
        {
            name: 'FureverHomed',
            image: '../assets/images/FureverHomed.jpg',
            description: 'app to search for currently avaialable perts using petfinder API, save them to your profile',
            link: "https://fureverhomed-ce9f92bca93e.herokuapp.com/",
            repo: "https://github.com/ccoff1798/FureverHomed.git"
        },
        {
            name: 'tinyskateshop',
            image: '../assets/images/tinyskateshop.jpg',
            description: 'ecommerce website for fingerboard business',
            link: "https://tinyskateshop.com/",
            repo: "https://github.com/ccoff1798/tinyskateshop.git"
        },
        {
            name: 'socialNetworkAPI',
            image: '../assets/images/slides.jpg',
            description: 'API for social network',
            link: "not deployed",
            repo: "https://github.com/RedactdName/socialNetworkAPI.git"
        },
        {
            name: 'password-generator',
            image: '../assets/images/slides.jpg',
            description: 'app to create unique passwords based on needed criteria',
            link: "not deployed",
            repo: "https://github.com/RedactdName/password-generator.git"
        },

    ]);
    return (
        <div className="m-5">
            <div className="flex-row">
                {projects.map((project, idx) => (
                    <div className="project" key={project.name}>
                        <img src={image} className="project-img" alt={project.name} />
                        <div>
                            <h3>
                                <a href={project.deploy}>{project.name}</a>
                                <a href={project.gitrepo}><i className="fab fa-github"></i></a>
                            </h3>
                            <p>{project.description}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Portfolio;

// __________________________________________________________________________













{/* <>
    <h2>Work</h2>
    <section id="Work" class="card-container">
        <figure class="card" id="main-card">
            {/* <!-- This is the project displayed using a larger image size from the others --> */}
//     <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//         <a href="https://redactdname.github.io/prework-study-guide/">
//             <img src="Assets/images/background.jpg" class="img-kauai"
//                 alt="Pink Kauai sunset overlooking Hanalei Bay from distance" />
//         </a>
//         <div class="card-body">
//             <h3 class="card-title">Prework Study Guide</h3>
//             <p class="card-text">
//                 A quick and easy study guide for completing bootcamp prework with tips and tools.
//             </p>
//         </div>
//     </div>
// </figure>
{/* <!-- The remaining cards will be in a smaller grid format --> */ }
// <div class="smaller-images-container">
//     <figure class="card">
//         <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//             <a href="https://redactdname.github.io/week1-refactor-seo/">
//                 {/* <!-- <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div> --> */}
//                 <img src="Assets/images/digital-marketing-meeting.jpg" class="img-fluid smaller-images" alt="Employees gather around a conference table" />
//             </a>
//         </div>

//         <div class="card-body">
//             <h3 class="card-title">Horiseon Homepage</h3>
//             <p class="card-text">
//                 Assisted with making code for webpage adaptible for all audiences.
//             </p>


//     </div>
// </figure>

// <figure class="card">
//     <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//         <a href="https://redactdname.github.io/password_generator/">
//             {/* <!-- <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div> --> */}
//             <img src="Assets/images/password-generator.png" alt="Homepage of passsord generator" id="password-generator" />
//         </a>
//     </div>

//     <div class="card-body">
//         <h3 class="card-title">Password Generator</h3>
//         <p class="card-text">
//             A website for generating random passwords.
//         </p>


//     </div>
// </figure>

// <figure class="card">
//     <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//         <a href="https://redactdname.github.io/RainOnYourParade/">
//             <img src="./Assets/images/RainOnYourParade.png" alt="Homepage for Rain On Your Parade App." />
{/* <!-- <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div> --> */ }
//         </a>
//     </div>

//     <div class="card-body">
//         <h3 class="card-title">Rain On Your Parade</h3>
//         <p class="card-text">
//             An app that helps you to look up events in your city and the weather happening there too.
//         </p>


//     </div>
// </figure>

// <figure class="card">
//     <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//         <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">
//             <img src="https://mdbootstrap.com/img/new/standard/nature/111.webp" alt="Shoreline with breaking waves" />
{/* <!-- <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div> --> */ }
//                     </a>
//                 </div>

//                 <div class="card-body">
//                     <h3 class="card-title">Insert work here</h3>
//                     <p class="card-text">
//                         Holding spot available for when there is more work to show off.
//                     </p>


//                 </div>
//             </figure>
//         </div>
//     </section>

// </> */}
