import React, { Fragment } from 'react';

class PetInfo extends React.Component {
    constructor(props) {
        super()
            this.state = {
                name: 'Boolean'
            }
        }

    render() {
        let { name } = this.state;
        return (
            <Fragment>
                <h1 className="pet-info-header">{ name ? `${name}'s Info` : 'Pet Info' }</h1>
                <section className="pet-info-container">
                    <div className="pet-info-picture">
                        <img className="pet-picture" src={require("../images/Boolean.jpg")} alt="your-dog-picture"/>
                    </div>
                    <div className="pet-info-details">
                        <div>
                            <label>Age: </label>
                            <span>9 months</span>
                        </div>
                        <div>
                            <label>Breed: </label>
                            <span>Yellow lab</span>
                        </div>
                        <div>
                            <label>Home Address: </label>
                            <span>1234 Rabbit Ln., Denver, CO</span>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default PetInfo;