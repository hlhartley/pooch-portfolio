import React, { Fragment } from 'react';

function HexagonImageBanner() {
    return (
        <Fragment>
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
        </Fragment>
    );
}

export default HexagonImageBanner;
