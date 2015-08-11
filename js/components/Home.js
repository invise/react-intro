import React from 'react'
import { Navigation } from 'react-router'

var Home = React.createClass({
    mixins: [Navigation],
    render () {
        return (
            <div className="slide home">
                <section className="home-hero">
                    <h1 className="home-hero-title">React</h1>
                </section>
                <section className="home-subHero">
                    <a className="home-hero-startButton" href="/slides/0"
                        onClick={ev => this.handleLinkClick(ev)}>
                        Start
                    </a>
                </section>
            </div>
        )
    },
    handleLinkClick (ev) {
        ev.preventDefault()

        this.transitionTo('slide', { id: 0 })
    }
})

export default Home
