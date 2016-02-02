import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

var Menu = React.createClass({

  render: function() {
    return(
      <MenuItem value = {this.props.data.painLocated} primaryText ={this.props.data.painLocated}/>);
  }
});
export default Menu;
