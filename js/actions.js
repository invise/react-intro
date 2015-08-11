import reactor from './reactor'

const actions = {
    setSlide (index) {
        reactor.dispatch('SET_SLIDE', index)
    }
}

export default actions
