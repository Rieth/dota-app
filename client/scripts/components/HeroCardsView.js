import React, { Component } from 'react';
import HeroCard from './HeroCard';
import HeroDetailCard from './HeroDetailCard'

class HeroCardsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedHero: this.props.selectedHero
        }

        this.handleSelectHero = this.handleSelectHero.bind(this);
    };
    handleSelectHero(hero) {
        this.setState({ selectedHero: hero });
    }
    render() {
        const rowHeroesStyle = {
            marginBottom: '50px'
        }
        const rowHeroDetailStyle = {
            borderStyle: 'double',
            borderColor: '#47091a',
            borderWidth: '5px',
            padding: '5px'
        }        
        return (
            <div>
                <div className="row" style={rowHeroesStyle}>
                    {this.props.heroes.map((hero, i) => {
                        return (<div key={i} className="col-md-2"><HeroCard key={i} hero={hero} selectHero={this.handleSelectHero.bind(null, hero)} /></div>)
                    })}
                </div>
                <div className="row" style={rowHeroDetailStyle}  >
                    <div className="col-md-12">
                        <HeroDetailCard hero={this.state.selectedHero} />
                    </div>
                </div>
            </div >
        )
    }
}
export default HeroCardsView;