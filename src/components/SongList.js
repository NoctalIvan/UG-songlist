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
              key={songData.title + '_' + songData.artist + '_' + songData.version}
              style={{'padding-left': '2px', 'padding-right': 0}}>
              <ListItemText primary={songData.title} secondary={songData.artist} />
              {songData.link && (<ListItemSecondaryAction onClick={() => window.open(songData.link)}>
                <IconButton edge="end" aria-label="link" style={{'padding-right': 0}}>
                  <LinkIcon />
                </IconButton>
              </ListItemSecondaryAction>) }
            </ListItem>
          ))
        }
      </List>) : (
        <p>I don't have this song, sorry... :(</p>
      )}
    </div>
  }
}

export default SongList;
