import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { LoadingPage } from '../../components/LoadingPage';


test ('should correctly render LoadingPage', () =>{
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
}); 
