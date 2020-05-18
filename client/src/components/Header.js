import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                GoLive
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    ALl Streams
                </Link>
            </div>
        </div>
    )
};

export default Header;