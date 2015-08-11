import { Store, toImmutable } from 'nuclear-js'

const slideStore = Store({
    getInitialState () {
        return null
    },
    initialize () {
        this.on('SET_SLIDE', (state, index) => index)
    }
})

export default slideStore
