export default function ServiceCard(props: { header: string, description: string, className: string }) {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card mb-5">
                <div className="card-header has-icon">
                    <i className={props.className} aria-hidden="true"></i>
                </div>
                <div className="card-body px-4 py-3">
                    <h5 className="mb-3 card-title text-dark">{props.header}</h5>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}