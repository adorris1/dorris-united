import React, { Component, PropTypes } from 'react';
import s from './ContentPage.css';
import withStyles from '../../decorators/withStyles';
var ReactFireMixin = require("reactfire");
var mui = require('material-ui');
import Content from './Content.jsx';
import _ from 'lodash';

@withStyles(styles)
var ContentList = React.createClass({
    static: propTypes = {
        path: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        title: PropTypes.string,
    },
    static: contextTypes = {
        onSetTitle: PropTypes.func.isRequired,
    },

mixins: [ReactFireMixin],
    getInitialState: function(){
        return {symptomSets:[]};
    },
    componentWillMount: function(){

        this.firebaseRef = new Firebase("https://dorris-chiro.firebaseio.com/symptomIdentifier/areas/symptomIdentifier/areas/symptomSets");
        this.bindAsArray(new Firebase("https://dorris-chiro.firebaseio.com/symptomIdentifier/areas/symptomIdentifier/areas/symptomSets"),"symptomSets");
        this.searchSets = [];
        this.state.symptomSets.map(function(symptomSet){
            this.searchSets.push(symptomSet);
        });

    },
    componentDidUpdate: function(nextProps){
        document.getElementById("loading_indicator").classList.add("hide");
    },


    render: function() {
        this.context.onSetTitle(this.props.title);

        var symptomItem = function(symptomSet){
            "use strict";
            return <SymptomItem data = {symptomSet}/>
        };


        return (
            <div className="ContentPage">
                <div className="ContentPage-container">
                    {this.props.path === '/' ? null : <h1>{this.props.title}</h1>}
                    <div>
                        {this.state.symptomSets.map(symptomItem)}
                    </div>
                </div>
            </div>
        );
    }

});
var SymptomItem = React.createClass({
    render: function(){
        var Paper = mui.Paper;
        return(
        <Paper zDepth={1} rounded={true}>
            <div className = "row list-item">
                <div className = "col-xs-6 header-phone hidden-md hidden-lg">Pain Located</div>
                <div className = "col-xs-6 col-md-2">{this.props.data.painLocated}</div>
                <div className = "col-xs-6 header-phone hidden-md hidden-lg">Suffering From</div>
                <div className = "col-xs-6 col-md-2">{this.props.data.sufferingFrom}</div>
                <div className = "col-xs-6 header-phone hidden-md hidden-lg">Symptom</div>
                <div className = "col-xs-6 col-md-3">{this.props.data.symptom}</div>
            </div>
        </Paper>
        );
    }
});

export default ContentList;