import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import userActions from '../src/chatAppFlux/action/userActions.js';
import LoginForm from '../src/chatAppFlux/components/loginForm.js';

jest.mock('../src/chatAppFlux/action/userActions.js');

describe('Login form component (snapshot)', () => {

  it('renders correctly', () => {
    const component = renderer.create(
      <LoginForm/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('LoginForm component', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <LoginForm/>
    );
  });

  it('renders the title', () => {
    expect(component.find('h1').text()).toContain("Login to your account");
  });

  it('renders two text boxes', () => {
    expect(component.find('input').length).toEqual(2);
  });

  it('sets initial state', () => {
    expect(component.state().username).toEqual('');
    expect(component.state().password).toEqual('');
  });

  it('contains 2 divs with class name "row"', () => {
    expect(component.find('div.row').length).toEqual(2);
  });

  it('properly wraps username input in tags', () => {
    expect(component.find('div.row').first().children().length).toEqual(1);
    expect(component.find('.form-group').first().children().length).toEqual(2);
    expect(component.find('.control-label').first().text()).toContain('Username');
  });

  it('properly wraps password input in tags', () => {
    expect(component.find('div.row').at(1).children().length).toEqual(1);
    expect(component.find('.form-group').at(1).children().length).toEqual(2);
    expect(component.find('.control-label').at(1).text()).toContain('Password');
  });

  it('renders Login button', () => {
    let button = component.find('button');
    expect(button.length).toEqual(1);
    expect(button.text()).toEqual('Login');
  });

  it('updates state on username change', () => {
    let evnt = { target : {name: 'username', value: 'test'} };
    component.find('input').first().simulate('change', evnt);
    expect(component.state().username).toEqual(evnt.target.value);
  });

  it('updates state on password change', () => {
    let evnt = { target : {name: 'password', value: 'pass'} };
    component.find('input').at(1).simulate('change', evnt);
    expect(component.state().password).toEqual(evnt.target.value);
  });

  it('resets state on button click', () => {
    let evnt = { target : { value: 'test'} };
    evnt.preventDefault = jest.fn();
    component.find('button').simulate('click', evnt);
    expect(component.state().username).toEqual('');
    expect(component.state().password).toEqual('');
  });
});
