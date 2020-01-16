import React, { Fragment } from 'react';

function HexagonImageBanner() {
    return (
        <Fragment>
            <div className="banner-container">
                <ul id="grid" className="clear">
                <div className="row">
                    <li>
                        <div className="hexagon lab-with-rose-img"></div>
                    </li>
                    <li>
                        <div className="hexagon dog-playing-with-rope-img"></div>
                    </li>
                </div>
                <div className="row">
                    <li>
                        <div className="hexagon dog-with-glasses-img"></div>
                    </li>
                    <li>
                        <div className="hexagon dog-with-party-hat-img"></div>
                    </li>
                    <li>
                        <div className="hexagon dog-jumping-img"></div>
                    </li>
                </div>
                <div className="row">
                    <li>
                        <div className="hexagon dog-with-window-down-img"></div>
                    </li>
                    <li>
                        <div className="hexagon husky-dog-img"></div>
                    </li>
                </div>
                </ul>
                <div>
                    <h1>POOCH PORTFOLIO</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>
                </div>
            </div>
        </Fragment>
    );
}

export default HexagonImageBanner;
