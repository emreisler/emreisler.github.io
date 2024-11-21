export default function Project(props: { companyName: string, header: string, description: string }) {
    const divClass = "col-md-6 col-lg-4 " + props.companyName;
    return (
        <div className={divClass}>
            <div className="portfolio-item">
                    <div className="text-holder">
                        <h6 className="title">{props.header}</h6>
                        <p className="subtitle">{props.description}</p>
                    </div>
            </div>
        </div>
    )
}