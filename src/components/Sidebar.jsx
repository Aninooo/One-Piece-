import React, { useState } from "react";
import './sidebar.css';

function Sidebar() {
    const [isVisible, setIsVisible] = useState(false);

    const user = {
        name: 'One Piece',
        imageUrl: 'logo (2).png',
        imageSize: 50,
    };

    return (
        <div
            className={`sidebar ${isVisible ? 'show' : ''}`}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <div className="name-container">
                <img
                    className="onepiece"
                    src={user.imageUrl}
                    alt={user.name}
                    style={{ width: user.imageSize, height: user.imageSize }}
                />
                <div className={`name ${isVisible ? 'show' : ''}`}>
                    {user.name}
                    <div className={`bio ${isVisible ? 'show' : ''}`}>{user.bio}</div>
                </div>
            </div>
            <ol className="list">
                <li><a href="#home"><img src="icons8-home-50.png" alt="Home" /></a> <span>Home</span></li>
                <li><a href="#contact"><img src="icons8-contact-30.png" alt="Contact"/></a><span>Contact</span></li>
                <li><a href="#about"><img src="icons8-about-30.png" alt="About" /></a><span>About</span></li>
            </ol>
        </div>
    );
}

export default Sidebar;
