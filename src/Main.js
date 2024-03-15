function Main() {
    return(
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text" id="title" autoFocus />
                <textarea id="body" placeholder="Write your note here"/>
            </div>
            <div className="portfolio">
                <h2>Portfolio</h2>
                <p>Checkout the stuff I've done!</p>
            </div>


            <div className="app-main-note-preview">
                <h1 className="preview-title">TITLE</h1>
                    <div className="markdown-preview">
                        note preview
                    </div>

            </div>


        </div>

    )

}

export default Main;