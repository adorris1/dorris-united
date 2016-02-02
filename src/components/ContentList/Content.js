import React from 'react';
import mui from 'material-ui';
import ListItem from 'material-ui/lib/lists/list-item';

var Content = React.createClass({
  handleChnage: function(){
    "use strict";
    this.props.onChange(this);
  },

render:function() {
  var listItemClassList = this.props.active;
  return (

    <ListItem onChange ={this.handleChnage} className = {listItemClassList}
      primaryText={this.props.data.sufferingFrom}>
      <p>
        {this.props.data.symptom}
      </p>
    </ListItem>
  );
}
    });



export default Content;
