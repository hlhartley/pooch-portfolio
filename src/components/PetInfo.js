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
            <section className="pet-info-container">
                <div>
                    <h1>{ name ? `${name}'s Info` : 'Pet Info' }</h1>
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
        );
    }
}

export default PetInfo;