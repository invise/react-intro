import React from 'react'
import { Navigation, RouteHandler } from 'react-router'

import reactor from '../reactor'

var App = React.createClass({
    mixins: [reactor.ReactMixin, Navigation],
    getDataBindings () {
        return {
            slide: ['slide'],
            slides: ['slides']
        }
    },
    render () {
        return (
            <div className="app">
                <RouteHandler/>
                <footer>
                    <div className="slideTimeline">
                        {this.renderTimeline()}
                    </div>
                </footer>
            </div>
        )
    },
    renderTimeline () {
        var { slide, slides } = this.state

        return slides
            .toIndexedSeq()
            .map((v, i) => {
                var slideIndex = ~~slide
                var isActive = (i === slideIndex)

                return (
                    <div key={i} className={`slideNode${isActive ? ' is-active' : ''}`}
                        onClick={ev => this.handleSlideNodeClick(i, ev)}>
                    </div>
                )
            })
    },
    handleSlideNodeClick (index, ev) {
        this.transitionTo('slide', { id: index })
    }
})

export default App
