import React, { Component } from 'react';

import './list.css';

class List extends Component {

    constructor(props) {
        super(props);
    }

    renderItem = items => (
        items.map(item => (
            <div className="list-item">
                <div className="list-thumb">
                    {
                        item != undefined && item.data.thumbnail != undefined && item.data.thumbnail != 'self' ?
                            <img
                                src={item.data.thumbnail}
                            />
                            :
                            <p>
                                Thumb
                        </p>
                    }

                </div>

                <div className="list-text-content">
                    <div className="title">
                        {item.data.title}
                    </div>

                    <div className="enviado-por">
                        enviado em {this.formatDate(new Date(item.data.created))} <span className="nome-usuario"> {item.data.author} </span>
                    </div>

                    <div className="dominio">
                        {item.data.domain}
                    </div>

                </div>
            </div>
        ))
    )

    formatDate = (unix_timestamp) => {

        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        // var hours = date.getHours();
        // // Minutes part from the timestamp
        // var minutes = "0" + date.getMinutes();
        // // Seconds part from the timestamp
        // var seconds = "0" + date.getSeconds();

        // // Will display time in 10:30:23 format
        // var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        // return formattedTime;
        let day = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate();
        let month = date.getMonth() < 9 ? '0' + date.getMonth() + 1 : date.getMonth() + 1;
        return `${day}/${month}/${date.getFullYear()}`;
    }

    render() {
        return (
            <div className="list-container">
                {this.renderItem(this.props.items)}
            </div>
        );
    }
}

export default List;
