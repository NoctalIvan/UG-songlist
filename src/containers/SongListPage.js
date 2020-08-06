import React, { Component } from 'react';
import songListData from './../data/songList.json'

import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import SongList from '../components/SongList'
import SearchBar from '../components/SearchBar'

import normalizeStr from '../lib/normalizeString'

const songFilter = (song, filter) => {
    return normalizeStr(song.title).includes(filter) || normalizeStr(song.artist).toLowerCase().includes(filter)
}

const songSort = (songs, sort) => {
    return songs.slice().sort((a, b) => sort.direction * (a[sort.field].localeCompare(b[sort.field])))
}

const paginate = (songs, page) => {
    return songs.slice(page*20, page*20 + 20)
}

class SongListPage extends Component {
    constructor() {
        super();
        this.state = {
            songListData: JSON.parse(JSON.stringify(songListData)),
            filterString: '',
            sort: {
                field: 'artist',
                direction: -1
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
    };

    render() {
        const filterSongListData = this.state.songListData
            .filter((song) => songFilter(song, this.state.filterString))
        const sortedSongListData = songSort(filterSongListData, this.state.sort)
        
        const paginationPages = Math.floor(sortedSongListData.length / 20 - 1)
        const pageSongListData = paginate(sortedSongListData, this.state.page - 1)
        console.log({page: this.state.page})
        
        return <Container>
            <SearchBar onInput={this.onSearchBarInput.bind(this)}/>
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
  