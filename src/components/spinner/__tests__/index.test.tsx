import * as React from "react";
import { shallow } from "enzyme";
import Spinner from "..";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CircularProgress from "@material-ui/core/CircularProgress";
configure({ adapter: new Adapter() });

describe("Spinner", () => {
  test("It shows a spinner when loading", () => {
    const component = shallow(<Spinner loading={true} />);
    expect(component.find(CircularProgress)).toBeTruthy();
  });

  test("It renders nothing for an unknown user", () => {
    const component = shallow(<Spinner loading={false} />);
    expect(component.get(0)).toBeFalsy();
  });
});
