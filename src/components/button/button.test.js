import React from 'react'
// used to setup file v
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// used to setup file ^

// utility functions
import {findByTestAttr, checkProps} from  './../../../Utils'
import SharedButton from './index'

import { shallow } from 'enzyme'


describe('SharedButton Component', () => {

    describe('Checking Props', () => {

        it('Should NOT throw a warning', () => {
            const  expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            }
            const propsError = checkProps(SharedButton, expectedProps)
            expect(propsError).toBe(undefined)
        })


    })

    describe("Button Renders", () => {

        let wrapper
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn()
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
            }
            wrapper = shallow(<SharedButton {...props} /> )
        })

        it("It should render a button", () => {
            const button = findByTestAttr(wrapper, 'buttonComponent')
            expect(button.length).toBe(1)
        })

        it("It should emit callback on click event", () => {
            const button = findByTestAttr(wrapper, 'buttonComponent')
            button.simulate('click')
            const callback = mockFunc.mock.calls.length 
            expect(callback).toBe(1)
        })

    })

})