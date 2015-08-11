import { Store, toImmutable } from 'nuclear-js'

import slidesData from '../data/slides'

const slidesStore = Store({
    getInitialState () {
        return toImmutable(slidesData)
    },
    initialize () {}
})

export default slidesStore
