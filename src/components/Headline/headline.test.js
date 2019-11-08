import React from 'react'


// used to setup file v
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// used to setup file ^

import { shallow } from 'enzyme'
import Headline from './index'
import { findByTestAttr } from './../../../Utils'

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>)
    return component
}



describe("Headline Component", () => {

    describe("Have prop", () =>{
        let wrapper
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }
            wrapper = setUp(props)
        })

        it("It Should render without errors", () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(1)
        })

        it("It should render an H1", () => {
            const h1 = findByTestAttr(wrapper, "Header")
            expect(h1.length).toBe(1)
        })
        
        it("It should render a description", () => {
            const p = findByTestAttr(wrapper, "desc")
            expect(p.length).toBe(1)
        })
    })

    describe("Have no props", () => {

        let wrapper
        beforeEach(() => {
            wrapper = setUp()
        })

        it("it should not render", () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(0)
        })

    })

})