import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class GenreSelect extends Component {
    constructor() {
        super();
        this.state = {
            rock: true,
            pop: true,
            chill: true
        }
    }

    onClick = (genre) => {
        const newState = {
            ...this.state,
            [genre]: !this.state[genre]
        }
        
        this.props.onChange && this.props.onChange(newState)
        this.setState(newState)
    }

    render() {
        return <div>
            <Button variant={this.state.rock ? "contained" : "outlined"} 
                style={{margin: 8, marginTop: 16}}
                color="primary" 
                onClick={() => this.onClick('rock')}> Rock</Button>

            <Button variant={this.state.pop ? "contained" : "outlined"} 
                style={{margin: 8, marginTop: 16}}
                color="primary" 
                onClick={() => this.onClick('pop')}> Pop</Button>

            <Button variant={this.state.chill ? "contained" : "outlined"} 
                style={{margin: 8, marginTop: 16}}
                color="primary" 
                onClick={() => this.onClick('chill')}> Chill</Button>
        </div>
    }
}

export default GenreSelect;
