
//src={require(`../../assets/projects/${name}.jpg`)}

function Project({project}) {
    const { name, image, description, deploy, gitrepo } = project

    return (
        <div className="project" key={name}>
            <img src={image} alt={name} />
            <div g-col-6 g-col-md-4>
                <h3>
                    <a href={deploy}>{name}</a>
                    <a href={gitrepo}><i className="fab fa-github"></i></a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Project;