import React from 'react'
import Router from 'react-router'

import reactor from './reactor'
import routes from './routes'
import slideStore from './stores/slide'
import slidesStore from './stores/slides'
import styles from '../css/main.styl'

reactor.registerStores({
    slide: slideStore,
    slides: slidesStore
})

Router.run(routes, Router.HistoryLocation, Root => {
    React.render(<Root/>, document.getElementById('app'))
})
