import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import normalizeStr from '../lib/normalizeString'

class SearchBar extends Component {
    
    render() {
        const {classes} = this.props

        return <div className={classes.SearchBar}>
            <TextField 
                id="searchBar" 
                color="primary" 
                fullWidth 
                label="Search..." 
                variant="outlined"
                onInput={(event) => this.props.onInput(normalizeStr(event.target.value))}/>
        </div>
    }
}

const useStyles = (theme) => ({
    SearchBar: {
        margin: "0"
    }
});

export default withStyles(useStyles)(SearchBar);
