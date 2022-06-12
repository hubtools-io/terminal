import * as React from "react";
import renderer from "react-test-renderer";
import ContextProvider from "../../src/contexts";
import { TerminalContextProvider } from "../../src/contexts/TerminalContext";
import Terminal from "../../src/components/Terminal";

let props: any;
const renderWrapper = () => (
  <ContextProvider>
    <TerminalContextProvider>
      <Terminal {...props} />
    </TerminalContextProvider>
  </ContextProvider>
);

describe("Terminal", () => {
  it("Terminal renders correctly", () => {
    expect(renderer.create(renderWrapper()).toJSON()).toMatchSnapshot();
  });

  it("Terminal doesn't render control buttons", () => {
    props = {
      showControlButtons: false,
    };
    expect(renderer.create(renderWrapper()).toJSON()).toMatchSnapshot();
  });

  it("Terminal doesn't render control bar", () => {
    props = {
      showControlBar: false,
    };
    expect(renderer.create(renderWrapper()).toJSON()).toMatchSnapshot();
  });
});
