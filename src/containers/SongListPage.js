import React, { Component } from 'react';
import songListData from './../data/songList.json'
import typeData from '../data/artistTypes.json'

import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';
import SongList from '../components/SongList'
import SearchBar from '../components/SearchBar'
import SortingSelect from '../components/SortingSelect'
import GenreSelect from '../components/GenreSelect'

import {
    songFilter,
    songSort,
    paginate
} from '../lib/filterSongs'

// fuse songlistData
songListData.forEach(song => {
    song.genre = typeData.find(t => t.artist === song.artist).type
})

class SongListPage extends Component {
    constructor() {
        super();
        this.state = {
            songListData: JSON.parse(JSON.stringify(songListData)),
            filterString: '',
            genres: {
                rock: true,
                pop: true,
                chill: true
            },
            sort: {
                field: 'title',
                direction: 1
            },
            page: 1
        }
    }
    
    onSearchBarInput(input) {
        this.setState({
            ...this.state,
            filterString: input,
            page: 1
        })
    };

    onPaginationChange(event, page) {
        this.setState({
            ...this.state,
            page
        })
        window.scrollTo({
            top: document.getElementsByClassName('SongList')[0].offsetTop, 
            behavior: 'smooth'
        });
    };

    onSortChange(value) {
        this.setState({
            ...this.state,
            sort: value,
            page: 1
        })
    }

    onGenreChange(value) {
        this.setState({
            ...this.state,
            genres: value,
            page: 1
        })
    }

    render() {
        const filterSongListData = this.state.songListData
            .filter((song) => songFilter(song, this.state.filterString))
            .filter((song) => this.state.genres[song.genre])
        const sortedSongListData = songSort(filterSongListData, this.state.sort)
        
        const paginationPages = Math.floor((sortedSongListData.length - 1) / 20)
        const pageSongListData = paginate(sortedSongListData, this.state.page - 1)
        
        return <Container>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <SearchBar onInput={this.onSearchBarInput.bind(this)}/>
                </Grid>
                <Grid item xs={4}>
                    <SortingSelect value={this.state.sort} onChange={this.onSortChange.bind(this)}/>
                </Grid>
            </Grid>
            <GenreSelect onChange={this.onGenreChange.bind(this)} />
            <SongList songListData={pageSongListData}/>
            <Pagination 
                size="large"
                style={{'marginBottom': '8px'}}
                hideNextButton={true} 
                hidePrevButton={true} 
                count={paginationPages} 
                onChange={this.onPaginationChange.bind(this)} 
                page={this.state.page}/>
        </Container>
    }
  }
  
  export default SongListPage;
  