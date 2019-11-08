import React from 'react'

// used to setup file v
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// used to setup file ^

import { shallow } from 'enzyme'
// code that can be utilize by many tests
import { findByTestAttr } from './../../../Utils'
import Header from './index'

// more refraction for multiple tests
const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}



describe("Header Component", () => {

    var component;
    // run before every 'it' test
    beforeEach(() => {
        component = setUp();
    })

    it("It should render without errors", () =>{
       // used to test component rendering
       //const component = shallow(<Header />);

       // refactor code for multiple tests
       //const component = setup();

       // console.log used to show in test what component looks like
       //console.log(component.debug())

       const wrapper = findByTestAttr(component,'headerComponent');
       expect(wrapper.length).toBe(1);
    })


    it("it should render a logo", () => {
        //const component = shallow(<Header />);

        // refactor code for multiple tests
        //const component = setup();

        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    })

})
