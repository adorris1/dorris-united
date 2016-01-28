import React, { Component, PropTypes } from 'react';
var ReactFireMixin = require("reactfire");
var Firebase = require("firebase");
import _ from 'lodash';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import s from './ContentList.css';
import withStyles from '../../decorators/withStyles';
import Content from './Content';
var ContentList = React.createClass({
    //static: propTypes = {
    //    path: PropTypes.string.isRequired,
    //    content: PropTypes.string.isRequired,
    //    title: PropTypes.string,
    //},
    //static: contextTypes = {
    //    onSetTitle: PropTypes.func.isRequired,
    //},
    mixins: [ReactFireMixin],

    getInitialState: function(){
        return {data:[]};
    },
    componentWillMount: function() {
        this.firebaseRef = new Firebase("https://dorris-chiro.firebaseio.com/symptomIdentifier/areas");

      this.firebaseRef.on("child_added",function(dataSnapshot) {
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
  componentDidMount:function(){
    symptomSets = this.refs.symptomSets;
    this.el = React.findDOMNode(symptomSets);
  },

  render: function() {
      //let symptomNodes = null;
      //
      //  symptomNodes = _.values(this.state.symptomSets).map((symptomSet, i)=> {
      //      return (
      //        <Content key={i} symptomSet={symptomSet}/>
      //      );
      //  });
        return(
          <div className="ContentPage">
            <div className="ContentPage-container">
                    <List>
                      {this.state.data.map(function(symptomSet, i){
                        "use strict";
                        return (
                          <Content data={symptomSet}/>);
                      },this)}

                    </List>
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
