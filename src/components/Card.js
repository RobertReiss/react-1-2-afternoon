import React, {Component} from 'react'

class Card extends Component {
    constructor(){
        super()
    }

    render(){
        const person = this.props.person;
        return(
            <div id="card-content-container">
                <div>
                    <h2 id="card-info-name">{person.name.first} {person.name.last}</h2>
                </div>
                <div id="card-info-employee">
                    <p><span id="span">From: </span> {person.city}, {person.country}</p>
                    <p><span id="span">Job Title:</span> {person.title}</p>
                    <p><span id="span">Employer: </span> {person.employer}</p>
                </div>
                <div id="card-info-favoriteMovies">
                    <h3>Favorite Movies:</h3>
                        <ol>
                        {/* style={{list-style-type: number}} */}
                            <li>{person.favoriteMovies[0]}</li>
                            <li>{person.favoriteMovies[1]}</li>
                            <li>{person.favoriteMovies[2]}</li>
                        </ol>
                </div>
            </div>
        )
    }
}

export default Card