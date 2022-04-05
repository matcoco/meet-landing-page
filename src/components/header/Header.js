import Button from "../_shared/Button"

const Header = () => {
    return (
        <div className="container-header">
            <img src="/assets/desktop/image-hero-left.png" className="img-header-left" alt="header hero left" width="394px" height="303px"/>
            <img src="/assets/tablet/image-hero.png" className="img-header" alt="header hero center" width="820px" height="303px"/>
            <div className="container-cta">
                <h1>
                    <span>Group Chat</span>
                    <span>for Everyone</span>
                </h1>

                <p>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
                <div className="group-btn">
                    <Button text="Download" cln="btn1" version="v1.3"/>
                    <Button text="what is it?" cln="btn2"/>
                </div>
            </div>
            <img src="/assets/desktop/image-hero-right.png" className="img-header-right" alt="header hero right" width="394px" height="303px"/>
        </div>
    )
}

export default Header