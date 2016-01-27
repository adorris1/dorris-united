import React, { Component, PropTypes } from 'react';
import s from './ContentPage.css';
import withStyles from '../../decorators/withStyles';
import Firebase from 'firebase';
import mui from 'material-ui';

var {ListItem} = mui;

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var p = this.props.item;
        return (
            <ListItem primaryText={this.props.item.painLocated}
                      nestedItems={[
                        <ListItem
                            key = {this.props.item.symptomSets.id}
                            primaryText = {this.props.item.symptomSets.sufferingFrom}
                            secondaryText={this.props.item.symptomSets.symptom}/>
                    ]}
            />
        );
    }
}export default Content;