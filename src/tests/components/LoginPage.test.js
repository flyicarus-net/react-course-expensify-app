import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../components/LoginPage';


test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});


test('should call startLogin on button click ', () => {
const startLogin = jest.fn();
const wrapper = shallow(<Header startLogin={startLogin />});
wrapper.find('button').simulate('click');
expect(history.push).toHaveBeenLastCalledWith('/');
expect(startLogin).toHaveBeenLastCalledWith( );
});