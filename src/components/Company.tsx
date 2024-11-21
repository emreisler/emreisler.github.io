import projects from "./projects";
import Project from "./Project";

export default function Company(props: { companyName: string }) {
    console.log("rendering company: ", props.companyName);
    return (
        <div className="portfolio-container">
            {projects.filter(project => project.company === props.companyName).map((project) => (
                <Project
                    key={project.company + project.description}
                    companyName={project.company}
                    header={project.header}
                    description={project.description}
                />
            ))}
        </div>
    )

}