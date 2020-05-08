import React, { Component } from 'react';
import './Tour.scss';

class Tour extends Component {
    state = {
        showInfo : false
    }

    handleInfor = () => {
        this.setState({
            showInfo : !this.state.showInfo
        })
    }

    render() {
        const {id, city, img, name, info} = this.props.tour;
        const {removeTour} = this.props;
        return (
        <article className="tour">
            <div className="img-container">
                <img
                src={img} alt=""/>    
                <span className="close-btn" onClick = {() => removeTour(id)}>
                    <i className="fa fa-window-close"></i>
                </span>
            </div>
            <div className="tour-info">
                <h3 className="city">{city}</h3>
                <h4 className="name">{name}</h4>
                <h5>
                    info{" "}
                    <span onClick={this.handleInfor}>
                        <i className="fa fa-chevron-circle-right" />
                    </span>
                </h5>
                <p>
                    {this.state.showInfo && info}
                </p>
            </div>
        </article>
        );
    }
}

export default Tour;