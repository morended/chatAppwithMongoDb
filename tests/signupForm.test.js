import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import userActions from '../src/chatAppFlux/action/userActions.js';
import SignupForm from '../src/chatAppFlux/components/signupForm.js';

jest.mock('../src/chatAppFlux/action/userActions.js');

describe('Signup form component (snapshot)', () => {

  it('renders correctly', () => {
    const component = renderer.create(
      <SignupForm/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('SignupForm component', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <SignupForm/>
    );
  });

  it('renders the title', () => {
    expect(component.find('h1').text()).toContain("Create your account");
  });

  it('renders 4 text boxes', () => {
    expect(component.find('input').length).toEqual(4);
  });

  it('sets initial state', () => {
    expect(component.state().username).toEqual('');
    expect(component.state().password).toEqual('');
    expect(component.state().email).toEqual('');
    expect(component.state().confirmPassword).toEqual('');
  });

  it('contains 4 divs with class name "row"', () => {
    expect(component.find('div.row').length).toEqual(4);
  });

  it('properly wraps username input in tags', () => {
    expect(component.find('div.row').first().children().length).toEqual(1);
    expect(component.find('.form-group').first().children().length).toEqual(2);
    expect(component.find('.control-label').first().text()).toContain('Username');
  });

  it('properly wraps email input in tags', () => {
    expect(component.find('div.row').at(1).children().length).toEqual(1);
    expect(component.find('.form-group').at(1).children().length).toEqual(2);
    expect(component.find('.control-label').at(1).text()).toContain('Email');
  });

  it('properly wraps password input in tags', () => {
    expect(component.find('div.row').at(2).children().length).toEqual(1);
    expect(component.find('.form-group').at(2).children().length).toEqual(2);
    expect(component.find('.control-label').at(2).text()).toContain('Password');
  });

  it('properly wraps confirm Password input in tags', () => {
    expect(component.find('div.row').at(3).children().length).toEqual(1);
    expect(component.find('.form-group').at(3).children().length).toEqual(2);
    expect(component.find('.control-label').at(3).text()).toContain('Confirm Password');
  });

  it('renders Signup button', () => {
    let button = component.find('button');
    expect(button.length).toEqual(1);
    expect(button.text()).toEqual('Sign up');
  });

  it('updates state on username change', () => {
    let evnt = { target : {name: 'username', value: 'user'} };
    component.find('input').first().simulate('change', evnt);
    expect(component.state().username).toEqual(evnt.target.value);
  });

  it('updates state on Email change', () => {
    let evnt = { target : {name: 'email', value: 'abc@gmail.com'} };
    component.find('input').at(1).simulate('change', evnt);
    expect(component.state().email).toEqual(evnt.target.value);
  });

  it('updates state on password change', () => {
    let evnt = { target : {name: 'password', value: 'password'} };
    component.find('input').at(2).simulate('change', evnt);
    expect(component.state().password).toEqual(evnt.target.value);
  });

  it('updates state on confirm password change', () => {
    let evnt = { target : {name: 'confirmPassword', value: 'password'} };
    component.find('input').at(3).simulate('change', evnt);
    expect(component.state().confirmPassword).toEqual(evnt.target.value);
  });


  it('resets state on button click', () => {
    let evnt = { target : { value: 'test'} };
    evnt.preventDefault = jest.fn();
    component.find('button').simulate('click', evnt);
    let componentState = component.state();
    expect(componentState.username).toEqual('');
    expect(componentState.email).toEqual('');
    expect(componentState.password).toEqual('');
    expect(componentState.confirmPassword).toEqual('');
  });

});
