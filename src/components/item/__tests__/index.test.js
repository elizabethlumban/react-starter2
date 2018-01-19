import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Item from '../';

test('Item displays a link to the item page', () => {
    // Render an item component
    const itemComponent = shallow(<Item item={{ id: '1', text: 'test' }} />);

    // Use utility methods for Enzyme - https://github.com/blainekasten/enzyme-matchers
    expect(itemComponent.find(Link)).toHaveProp('to', '/1');
});
