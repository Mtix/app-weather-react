import React, { Component } from 'react';

export default class MyTown extends Component {
    render() {
        return (
            <div className="my-town">
                <div>Страна: {this.props.townData.country.name_ru}</div>
                <div>Город: {this.props.townData.city.name_ru}</div>
            </div>
        );
    }
}