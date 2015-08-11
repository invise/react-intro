import React from 'react'
import { Navigation } from 'react-router'

var Live = React.createClass({
    mixins: [Navigation],
    render () {
        return (
            <div className="slide live">
                <h2>Live Example</h2>
                <iframe height="268" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true"
                    src="//codepen.io/invise/embed/OVqBMw/?height=268&theme-id=17757&default-tab=result"
                    style={{ boxSizing: 'content-box', width: '100%', borderStyle: 'solid', borderWidth: 20, borderColor: '#212121' }}>
                    See the Pen
                </iframe>
            </div>
        )
    },
    handleLinkClick (ev) {
        ev.preventDefault()

        this.transitionTo('/')
    }
})

export default Live


// <p data-height="268" data-theme-id="17757" data-slug-hash="OVqBMw"
//     data-default-tab="result" data-user="invise" className="codepen">
//     <span>See the Pen </span>
//     <a href="http://codepen.io/invise">
//         {"@invise"}
//     </a>
//     <span> on </span>
//     <a href="http://codepen.io">CodePen</a>
//     <span>.</span>
// </p>