import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adadpter-react-16'

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})