import React from 'react'


// used to setup file v
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// used to setup file ^

import { shallow } from 'enzyme'
import Headline from './index'

// utility functions
import { findByTestAttr, checkProps  } from './../../../Utils'

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>)
    return component
}



describe("Headline Component", () => {

    describe("Check our proptypes", () =>{

        it("It Should not throw a warning", () =>{

            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'text@email.com',
                    age: 23,
                    onlineStatus: false
                }]
            }
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBe(undefined)

        })

    })

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