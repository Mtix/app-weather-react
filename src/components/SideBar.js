import React, { Component } from 'react';
import { connect } from 'react-redux';

class SideBar extends Component {

    viewTown(zip) {
        console.log(zip);
        this.props.onViewTown(zip);
    }

    render() {
        console.log(this.props.dataState.towns);

        return (
            <div className="side-bar">
                <ul>
                    {this.props.dataState.towns.townsList.map((town,index) => {
                        const townZip = town.zip;
                        return <li key={index} onClick={this.viewTown.bind(this, townZip)}>{town.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        dataState: state
    }),
    dispatch => ({
        onViewTown: (townZip) => {
            dispatch({type: 'VIEW_TOWN', zip: townZip})
        }
    })
)(SideBar)
