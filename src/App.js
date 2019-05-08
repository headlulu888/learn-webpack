import React from 'react'
import $ from 'jquery'

export default class App extends React.Component {
    componentDidMount() {
        $('<h1 />')
            .text('Hello world from JQuery')
            .css({
                textAlign: 'center',
                color: '#2020c1'
            })
            .appendTo($('header'))
    }
    
    render() {
        return (
            <React.Fragment>
                <header></header>
                <hr />
                <div className="box">
                    <h2 className="box-title">Box title</h2>
                    <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorum ratione cupiditate eius a dolorem! Hic id eum itaque cupiditate!</p>
                </div>
            </React.Fragment>
        )
    }
}