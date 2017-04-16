import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';

import chatActions from '../src/chatAppFlux/action/chatActions.js';
import Student from '../src/chatAppFlux/components/Student.js';

jest.mock('../src/chatAppFlux/action/chatActions.js');

describe('Student component (snapshot)', () => {

  it('renders correctly', () => {
    const component = renderer.create(
      <Student id='1'/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('Student component', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <Student id='1'/>
    );
  });

  it('renders the id', () => {
    expect(component.find('div').text()).toContain("Student 1");
  });

  it('sets initial state', () => {
    expect(component.state().message).toEqual("");
  });

  it('renders text box', () => {
    expect(component.find('input').length).toEqual(1);
  });

  it('renders button', () => {
    let button = component.find('button');
    expect(button.length).toEqual(1);
    expect(button.text()).toEqual('Send');
  });

  it('updates state on text change', () => {
    let evnt = { target : {value: 'test'} };
    evnt.preventDefault = jest.fn();
    component.find('input').simulate('change', evnt);
    expect(component.state().message).toEqual(evnt.target.value);
  });

  it('resets state on button click', () => {
    let evnt = { target : { value: 'test'} };
    evnt.preventDefault = jest.fn();
    component.find('button').simulate('click', evnt);
    expect(component.state().message).toEqual('');
  });

  it('call chatActions updateMessages on button click', () => {
    let evnt = { target : { value: 'test'} };
    evnt.preventDefault = jest.fn();

    //clear mock information from previous tests
    chatActions.updateMessages.mockClear();

    component.setState({message: 'mystate'});
    component.find('button').simulate('click', evnt);
    expect(chatActions.updateMessages).toHaveBeenCalledWith({id:'1', message: 'mystate'})
  });

});
