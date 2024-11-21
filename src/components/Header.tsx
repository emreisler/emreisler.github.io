
export default function Header(){
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = "../assets/docs/EMRE_ISLER.pdf";
        link.download = 'Emre İŞLER.pdf';
        link.click();
    }
    return (
        <header className="header">
            <div className="container">
                <ul className="social-icons pt-3">
                    <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-google"
                                                                                                  aria-hidden="true"></i></a>
                    </li>
                    <li className="social-item"><a className="social-link text-light"
                                                   href="https://www.github.com/emreisler"><i
                        className="ti-github"
                        aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-medium"
                                                                                                  aria-hidden="true"></i></a>
                    </li>
                </ul>
                <div className="header-content">
                    <h1 className="header-title">Emre İŞLER</h1>
                    <h6 className="header-mono">Senior Software Engineer</h6>
                    <button className="btn btn-primary btn-rounded" onClick={downloadResume}><i
                        className="ti-printer pr-2"></i>Print
                        Resume
                    </button>
                </div>
            </div>
        </header>
    )
}