import projects from "./projects";
import Project from "./Project";

export default function Company(props: { companyName: string }) {
    console.log("Rendering company: ", props.companyName);

    return (
        <div className="row">
            {projects
                .filter((project) => project.company === props.companyName)
                .map((project) => (
                    <div className="col-md-4 col-sm-6" key={project.company + project.description}>
                        <div className="card mb-5">
                            <div className="card-header has-icon">
                                <i className={project.iconClass} aria-hidden="true"></i>
                            </div>
                            <div className="card-body px-4 py-3">
                                <h5 className="mb-3 card-title text-dark">{project.header}</h5>
                                <p>{project.description}</p>
                                <small className="text-muted">{project.company}</small>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}