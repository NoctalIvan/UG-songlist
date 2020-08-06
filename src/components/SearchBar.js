import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

class SearchBar extends Component {
    
    render() {
        const {classes} = this.props

        return <div className={classes.SearchBar}>
            <TextField 
                id="searchBar" 
                color="secondary" 
                fullWidth 
                label="Search..." 
                variant="outlined"
                onInput={(event) => this.props.onInput(event.target.value.toLowerCase())}/>
        </div>
    }
}

const useStyles = (theme) => ({
    SearchBar: {
        margin: "0"
    }
});

export default withStyles(useStyles)(SearchBar);
