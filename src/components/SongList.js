import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';

class SongList extends Component {
  render() {
    return <div className="SongList">
      {
        (this.props.songListData.length > 0) ? (<List>
        {
          this.props.songListData.map(songData => (
            <ListItem 
              key={songData.song_name + '_' + songData.band_name + '_' + songData.version}
              divider={true}
              style={{'paddingLeft': '2px', 'paddingRight': 0}}>
              <ListItemText primary={songData.song_name} secondary={songData.band_name} />
              {songData.song_url && (<ListItemSecondaryAction onClick={() => window.open(songData.song_url)}>
                <IconButton edge="end" aria-label="link" style={{'paddingRight': 0}}>
                  <LinkIcon />
                </IconButton>
              </ListItemSecondaryAction>) }
            </ListItem>
          ))
        }
      </List>) : (
        <p>I don't have this song/artist, sorry <span role="img" aria-label="disappointed">😞</span></p>
      )}
    </div>
  }
}

export default SongList;
