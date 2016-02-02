import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

var MenuWrapper = React.createClass({
  getInitialState: function(){
    return {data:[],value:2};
  },
  handleChange: function (event) {
    this.setState({value: event.target.value});
  },
  render: function(){
    var message = "you selected : " + this.state.value;
    return(
      <div>

      </div>
    )
  }

})
