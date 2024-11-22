
export default function Header(){
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/documents/EMRE_ISLER.pdf`;
        link.download = 'EMRE İŞLER.pdf';
        document.body.appendChild(link); // Append to DOM
        link.click();
        document.body.removeChild(link); // Clean up
    }
    return (
        <header className="header" id="home">
            <div className="container">
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