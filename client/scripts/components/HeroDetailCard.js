import React, { Component } from 'react';

class HeroDetailCard extends Component {
    render() {
        const cardTextStyle = {
            padding: '0px',
            color: 'white'
        }        
        return (
            <div className="row">
                <div className="col-md-3"><img src={this.props.hero.imageStats} alt="Some picture"/></div>
                <div className="col-md-9" style={cardTextStyle}><h1>{this.props.hero.name}</h1><p>{this.props.hero.description}</p></div>
            </div>
        );
    }
}

export default HeroDetailCard;