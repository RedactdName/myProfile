


function ProjectCard({ project }) {
    const { name, repo, link, description } = project;
    return (
        <div className="card">
            <img src="" alt="Avatar" style="width:100%" />
                <div className="container">
                    <h4><b>{name}</b></h4>
                    <p>{description}</p>
                    <a href={link}>{name}</a>
                    <a href={repo}>Github Link</a>
                </div>
        </div>
        
    )
};
export default ProjectCard; 