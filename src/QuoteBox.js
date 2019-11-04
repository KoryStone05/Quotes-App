import React, { Component } from 'react';

class QuoteBox extends Component {
    render() {

        //Set the background color of the HTML element to the random color that is passed in as a prop
        const html = document.documentElement;
        html.style.background = this.props.color;

        return(
            <div style={{ backgroundColor: 'white' }}>
                <h1 style={{ color: this.props.color }}>{this.props.quote}</h1>
                <h4 style={{ color: this.props.color }}>
                -{this.props.author !== '' ? this.props.author : 'Unknown'}
                -</h4>
                <button 
                style= {{ color: 'white' }}
                style= {{ backgroundColor: this.props.color }}
                onClick={this.props.handleClick}>New Quote</button>
            </div>
        );
    }
}

export default QuoteBox;