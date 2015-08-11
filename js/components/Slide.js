import { toImmutable } from 'nuclear-js'
import React from 'react'
import Highlight from 'react-highlight'
import { Navigation } from 'react-router'

import actions from '../actions'
import reactor from '../reactor'
import example from '../data/example'

var Slide = React.createClass({
    mixins: [reactor.ReactMixin, Navigation],
    statics: {
        willTransitionTo (transition, { id }) {
            actions.setSlide(id)
        }
    },
    getDataBindings () {
        return {
            slide: ['slide'],
            slides: ['slides']
        }
    },
    render () {
        var { slide, slides } = this.state
        var slideIndex = ~~slide
        var data = slides.get(slideIndex)
        var name = data.get('name')
        var isFirst = (slideIndex === 0)
        var isLast = (slideIndex + 1 === slides.size)

        return (
            <div className={`slide slide--${name}`} tabIndex="0">
                <section className="slide-pane--left">
                    {this.renderContent(data)}
                </section>
                <section className="slide-pane--right">
                    {this.renderImage(data)}
                </section>
                <div className={`slide-control slide-control--prev${isFirst ? ' is-first' : ''}`}
                    onClick={ev => this.goPrev(slideIndex, ev)}>
                    <i className="ion ion-android-arrow-back"></i>
                </div>
                <div className={`slide-control slide-control--next${isLast ? ' is-last' : ''}`}
                    onClick={ev => this.goNext(slideIndex, ev)}>
                    <i className="ion ion-android-arrow-forward"></i>
                </div>
                <div className={"slide-control slide-control--exit"}
                    onClick={ev => this.goHome(ev)}>
                    <i className="ion ion-android-close"></i>
                </div>
            </div>
        )
    },
    renderContent (data, index = 'root', level = 0) {
        return (
            <div key={'' + index} className={`slide-item level-${level}`}>
                <div className="slide-item-text">
                    {data.has('href') ? this.renderLink(data) : data.get('text') }
                </div>
                {this.renderItems(data.get('items'), level)}
            </div>
        )
    },
    renderImage (data) {
        if (data.has('image')) {
            let uri = data.get('image')

            return (
                <img key={uri.substr(0, 3)} className="slide-image" src={`/images/${data.get('image')}`}></img>
            )
        } else {
            let name = data.get('name')

            let [format, code] = (name === 'intro')
                ? ['javascript', example]
                : ['json', JSON.stringify(toImmutable(this.state).toJS(), null, 2)]

            return (
                <div className="slide-snippet">
                    <Highlight className={format}>
                        {code}
                    </Highlight>
                </div>
            )
        }
    },
    renderItems (items, level) {
        return (
            <div className="slide-items">
                {items ? items.toIndexedSeq().map((v, i) => this.renderContent(v, i, 1 + level)) : null}
            </div>
        )
    },
    renderLink (data) {
        return (
            <a href={data.get('href')}>
                {data.get('text')}
            </a>
        )
    },
    goHome (ev) {
        this.transitionTo('/')
    },
    goNext (index, ev) {
        this.transitionTo('slide', { id: ++index })
    },
    goPrev (index, ev) {
        this.transitionTo('slide', { id: --index })
    }
})

export default Slide
