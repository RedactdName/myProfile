
//src={require(`../../assets/projects/${name}.jpg`)}

function ProjectCard({project}) {
    const { name, image, repo, link, description } = project
   
    return (
        <div className="smaller-images-container">
            <img src={image} alt="Avatar" className="img" />
                <div className="container">
                    <h4><b>{name}</b></h4>
                    <p>{description}</p>
                    <a href={link}>{name}</a>
                    <a href={repo}><i className="fab fa-github"></i></a>
                </div>
        </div>
        
    )
};
export default ProjectCard; 