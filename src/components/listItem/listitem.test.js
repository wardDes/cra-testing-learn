import React from 'react'


// used to setup file v
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// used to setup file ^

import { shallow } from 'enzyme'
import ListItem from './index'

// utility functions
import { findByTestAttr, checkProps  } from './../../../Utils'

describe("ListItem Component", () => {

    describe("Checking Proptypes", () => {

        it("Should not throw a warning", () => {
            const expectedProps = {
                title: "Example Title",
                desc: 'Some text'
            }
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()
        })

    })

    describe("Component renders", () => {

        let wrapper
        beforeEach(() => {
            const props = {
                title: "Example Title",
                desc: 'Some text'
            }
            wrapper = shallow(<ListItem {...props} />)
        })
    
        it("Should render without error", () => {
            const component = findByTestAttr(wrapper,'ListItemComponent' )
            expect(component.length).toBe(1)
        })

        it("Should render a title", () => {
            const title = findByTestAttr(wrapper, 'componentTitle')
            expect(title.length).toBe(1)
        })

        it("Should render a description", () => {
            const desc = findByTestAttr(wrapper, 'componentDesc')
            expect(desc.length).toBe(1)
        })
    })

    describe("Should NOT render", () => {

        let wrapper
        beforeEach(() => {
            const props = {
                desc: 'Some text'
            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it("Component is not rendered", () => {
            const component = findByTestAttr(wrapper, 'ListItemComponent')
            expect(component.length).toBe(0)
        })


    })


})
