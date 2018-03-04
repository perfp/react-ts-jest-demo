import * as React from 'react';
import {shallow} from 'enzyme';
import Home from './Home';

test('Can render <Home>', () => {
    shallow(<Home />);
});


test("Check state changes on add", () => {
    var home = shallow(<Home />);
    expect(home.state("isEditingRecipe")).toBe(false);
    
    home.find(".add").simulate("click");

    expect(home.state("isEditingRecipe")).toBe(true);
});