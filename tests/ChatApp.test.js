import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';

import ChatApp from '../src/chatAppFlux/components/ChatApp.js';
import Student from '../src/chatAppFlux/components/Student.js';
import chatStore from '../src/chatAppFlux/store/chatStore.js';

//mock chatStore
jest.mock('../src/chatAppFlux/store/chatStore.js');

describe('ChatApp component (snapshot)', () => {

  it('renders correctly', () => {
    const component = renderer.create(
      <ChatApp/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('ChatApp component', () => {
  let component;
  beforeEach(() => {
    component = shallow(
        <ChatApp/>
    );
  });

  it('renders two Student components', () => {
    expect(component.find('Student').length).toEqual(2);
  });

  it('has the chat history header', () => {
    expect(component.find('h3').length).toEqual(1);
  });

  it('initially chat history is empty', () => {
    expect(component.find('p').length).toEqual(0);
  });

  it('shows correct number of messages in history', () => {
    let msgs = [
      { id: "1", message: "a"},
      { id: "2", message: "b"},
      { id: "1", message: "c"}
    ];
    component.setState({ messages: msgs});
    expect(component.find('p').length).toEqual(msgs.length);
    const html = component.html();
    expect(html).toContain(msgs[0].message);
    expect(html).toContain(msgs[1].message);
    expect(html).toContain(msgs[2].message);
  });

  it('updates state on change', () => {
    let testMsgs = [
      { id: "1", message: "a"}
    ];
    component.instance().onChange({ messages: testMsgs });
    expect(component.find('p').length).toEqual(testMsgs.length);
  });

  it('listens to chatstore on mount', () => {
    component = mount(<ChatApp/>);
    expect(chatStore.listen).toHaveBeenCalled();
  });

  it('unlistens to chatstore on unmount', () => {
    component = mount(<ChatApp/>);
    component.unmount();
    expect(chatStore.unlisten).toHaveBeenCalled();
  });

  describe('lifecyle', () => {
    beforeEach(() => {
      ChatApp.prototype.componentDidMount = jest.fn();
      ChatApp.prototype.componentWillUnmount = jest.fn();
      component = mount(<ChatApp/>);
    });

    it('calls componentDidMount once when mounted', () => {
      expect(ChatApp.prototype.componentDidMount).toHaveBeenCalledTimes(1);
    });

    it('calls componentWillUnmount once when unmounted', () => {
      component.unmount();
      expect(ChatApp.prototype.componentWillUnmount).toHaveBeenCalledTimes(1);
    });
  });
});
