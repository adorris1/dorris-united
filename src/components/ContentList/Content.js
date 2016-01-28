import React from 'react';
import mui from 'material-ui';
import ListItem from 'material-ui/lib/lists/list-item';

var Content = React.createClass({

render:function() {
  return (
    <ListItem
      primaryText={this.props.data.painLocated}>
      <p>
        {this.props.data.sufferingFrom}<br/>
        {this.props.data.symptom}
      </p>
    </ListItem>
  );
}
    });



export default Content;
