


function Projects() {
    // Replace links with deployed projects and GitHub repos
    const [projects] = useState([
        {
            name: 'surfReport',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
        },]);
    return (
        <div>
            <div className="flex-row">
                {projects.map((project, idx) => (
                    <ProjectCard
                        project={project}
                        key={"project" + idx}
                    />
                ))}
            </div>
        </div>
    );
};
export default Projects;

// __________________________________________________________________________













<>
    <h2>Work</h2>
    <section id="Work" class="card-container">
        <figure class="card" id="main-card">
            {/* <!-- This is the project displayed using a larger image size from the others --> */}
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <a href="https://redactdname.github.io/prework-study-guide/">
                    <img src="Assets/images/background.jpg" class="img-kauai"
                        alt="Pink Kauai sunset overlooking Hanalei Bay from distance" />
                </a>
                <div class="card-body">
                    <h3 class="card-title">Prework Study Guide</h3>
                    <p class="card-text">
                        A quick and easy study guide for completing bootcamp prework with tips and tools.
                    </p>
                </div>
            </div>
        </figure>
        {/* <!-- The remaining cards will be in a smaller grid format --> */}
        <div class="smaller-images-container">
            <figure class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <a href="https://redactdname.github.io/week1-refactor-seo/">
                        {/* <!-- <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div> --> */}
                        <img src="Assets/images/digital-marketing-meeting.jpg" class="img-fluid smaller-images" alt="Employees gather around a conference table" />
                    </a>
                </div>

                <div class="card-body">
                    <h3 class="card-title">Horiseon Homepage</h3>
                    <p class="card-text">
                        Assisted with making code for webpage adaptible for all audiences.
                    </p>


                </div>
            </figure>

            <figure class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <a href="https://redactdname.github.io/password_generator/">
                        {/* <!-- <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div> --> */}
                        <img src="Assets/images/password-generator.png" alt="Homepage of passsord generator" id="password-generator" />
                    </a>
                </div>

                <div class="card-body">
                    <h3 class="card-title">Password Generator</h3>
                    <p class="card-text">
                        A website for generating random passwords.
                    </p>


                </div>
            </figure>

            <figure class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <a href="https://redactdname.github.io/RainOnYourParade/">
                        <img src="./Assets/images/RainOnYourParade.png" alt="Homepage for Rain On Your Parade App." />
                        {/* <!-- <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div> --> */}
                    </a>
                </div>

                <div class="card-body">
                    <h3 class="card-title">Rain On Your Parade</h3>
                    <p class="card-text">
                        An app that helps you to look up events in your city and the weather happening there too.
                    </p>


                </div>
            </figure>

            <figure class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/111.webp" alt="Shoreline with breaking waves" />
                        {/* <!-- <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div> --> */}
                    </a>
                </div>

                <div class="card-body">
                    <h3 class="card-title">Insert work here</h3>
                    <p class="card-text">
                        Holding spot available for when there is more work to show off.
                    </p>


                </div>
            </figure>
        </div>
    </section>

</>
