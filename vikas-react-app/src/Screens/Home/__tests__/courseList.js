import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CourseList from '../courseList';

configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    courses: [],
    deleteCourses: () => {},
    editRecord: () => {},
    renderAuthorName: () => {},
  };

  const Wrapper = shallow(<CourseList {...props} />);
  return {
    props,
    Wrapper,
  };
};

describe('Course List page testing', () => {
  it('description', () => {
    const { Wrapper } = setup();
    expect(Wrapper.find('table').exists()).toBe(true);
    expect(Wrapper.find('table>thead>tr>th').length).toBe(6);
    expect(Wrapper.find('table>tbody>tr').length).toBe(0);
  });

  it('description', () => {
    const { props } = setup();
    const props1 = {
      ...props,
      courses: [
        {
          title: 'title',
          courseURL: '',
          length: '5:08',
          category: 'react',
          country: '',
          state: '',
          watchHref: 'http://www.pluralsight com/courses/react-flux-building-applications',
          authorId: 'dan-wahlin',
          id: 'SmZG8VX',
        },
      ],
    };

    const wrapper = shallow(<CourseList {...props1} />);
    expect(wrapper.find('table>tbody>tr').length).toBe(1);
  });
});
