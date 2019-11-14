import React from 'react'

// used to setup file v
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// used to setup file ^

import { shallow } from 'enzyme'
// code that can be utilize by many tests
import { findByTestAttr, testStore } from './../Utils'

import App from './App'

const setUp = (initialState={}) => {
    const store = testStore(initialState)
    
    // need childAt(0).dive() method to return the app
    // inside the <Provider> wrapper
    const wrapper = shallow(<App store={store} />).childAt(0).dive()

    // use code below to see what  wrapper is returning
    // when tests fail
    //console.log(wrapper.debug())
    return wrapper
    

}

describe("App Component", () => {

    let wrapper
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: "Example Title 1",
                body: "Some test"
            },
            {
                title: "Example Title 2",
                body: "Some test"
            },
            {
                title: "Example Title 3",
                body: "Some test"
            }]
        }
        wrapper = setUp(initialState)
    })

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent')
        expect(component.length).toBe(1)
    })

    it("This method should update state as expected", () => {
        const classInstance = wrapper.instance()
        classInstance.exampleMethod_updatesState()
        const newState = classInstance.state.hideBtn
        expect(newState).toBe(true)
    })

    it('Method Should return value as expected', () => {
        const classInstance = wrapper.instance()
        const newValue = classInstance.exampleMethod_returnsAValue(6)
        expect(newValue).toBe(7)

    })
    

})