import React, { Component, PropTypes } from 'react';

var ReactFireMixin = require("reactfire");
var Firebase = require("firebase");
import _ from 'lodash';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import s from './ContentList.css';
import withStyles from '../../decorators/withStyles';
import Content from './Content';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Menu from './Menu';
var areas;
var ContentList = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {
      data: [],
      selectedValue: 'Head',
    wrapperClass: 'closed'
    };
  },

  componentWillMount: function () {
    this.firebaseRef = new Firebase("https://dorris-chiro.firebaseio.com/symptomIdentifier/areas");

    this.firebaseRef.on("child_added", function (dataSnapshot) {
      this.setState({
        data: this.state.data.concat(dataSnapshot.val())
      });
      //nextItems = this.state.symptomSets.concat([
      //  {data: dataSnapshot.val(), id: Date.now()}
      //]);
      //
      //this.setState({
      //  "symptomSets": nextItems
      //});
    }.bind(this));
  },
  //getAreas: function () {
  //  "use strict";
  //  var areas = [];
  //  areas = _.uniq(_.pluck(allSymptomData, 'painLocated'));
  //  console.log("areas array" + areas);
  //  return areas;
  //
  //},
  componentDidMount: function () {
    areas = this.refs.areas;
    this.el = React.findDOMNode(areas);
  },
  handleChange: function (event) {

    this.setState({
      selectValue: event.target.selectValue,
      wrapperClass: 'opening'
    });
    body.classList.add("fix");
  },

  render: function () {
    //let symptomNodes = null;
    //
    //  symptomNodes = _.values(this.state.symptomSets).map((symptomSet, i)=> {
    //      return (
    //        <Content key={i} symptomSet={symptomSet}/>
    //      );
    //  });


    return (
      <div className ={this.state.wrapperClass}>
      <div className="ContentPage">
        <div className="ContentPage-container">
          <DropDownMenu selectedValue={this.state.selectedValue} onChange={this.handleChange}>
            <MenuItem value={"Head"} primaryText="Head"/>
            <MenuItem value={"Neck"} primaryText="Neck"/>
            <MenuItem value={"midUpperBack"} primaryText="Mid/Upper Back"/>
            <MenuItem value={"Shoulder"} primaryText="Shoulder"/>
            <MenuItem value={"Elbow"} primaryText="Elbow"/>
            <MenuItem value={"Wrist"} primaryText="Wrist"/>

          </DropDownMenu>
          <List>
            {this.state.data.map(function (symptomSet, i) {
              return (
                <Content onChange = {this.handleChange.bind(this, i)} key={i} active={i===this.state.selectedValue ? 'active' : null} data={symptomSet}/>);
            }, this)}

          </List>
        </div>
      </div>
        </div>

    );
    //var symptomNodes = this.state.symptomSets.map((symptomSet)=> {
    //    return( <SymptomItem key ={symptomSet.id} data = {symptomSet} />
    //    );
    //});
    //    return (
    //        <div>
    //            {symptomNodes}
    //        </div>
    //    );
    //var symptomNodes = this.state.symptomSets.map((symptomSet)=> {
    //    return( <SymptomItem key ={symptomSet.id} data = {symptomSet} />
    //    );
    //});
    //    return (
    //        <div>
    //            {symptomNodes}
    //        </div>
    //    );

  }
});


export default ContentList;
