import React, { Component } from 'react';

import './list.css';

class List extends Component {


    renderItem = items => (
        items.map((item, i) => (
            <div key={i} className="list-item">
                <div className="list-thumb">
                    {
                        item !== undefined && item.data.thumbnail !== undefined && item.data.thumbnail !== 'self' ?
                            <img
                                src={item.data.thumbnail}
                                alt="Thumbnail"
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

        var now = new Date().getTime();

        var ellapsed_time = now - date;

        console.log(ellapsed_time)

      
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
