import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Button, { IButton } from "./Button";

describe("<Button />", () => {
  let component: ShallowWrapper;
  let mockCallBack = jest.fn();
  beforeEach(() => {
    component = shallow(
      <Button label="Button" showIconRight={false} onClick={mockCallBack} />
    );
  });
  test("Button exists", () => {
    expect(component.length).toBe(1);
  });
  test("it should render our snapshot correctly", () => {
    expect(component).toMatchSnapshot();
  });
  test("it should react when clicked", () => {
    component.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
