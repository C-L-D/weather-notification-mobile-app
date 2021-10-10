// Tests for Notification component
// import component
// import image
// import jest-dom native
// The notification component should:
// send a push notification
// with given text in bold
// with given text
// with a green yes button
// with a red no button

import Notification from "./";
import { render } from "@testing-library/react";
import "@testing-library/jest-native/extend-expect";

describe("The notification component should:", () => {
  test("produce a push notification", () => {
    const { getByTestId } = render(<Notification />);
    expect(getByTestId("notification")).toBeInTheDocument();
  });
  test("render correct text in bold", () => {
    const { getByText } = render(<Notification data="1234" />);
    expect(getByText("1234")).toBeInTheDocument();
  });
  test("render data text", () => {
    const { getByText } = render(<Notification text="Pressure is above:" />);
    expect(getByText("Pressure is above:")).toBeInTheDocument();
  });
  describe("Yes button should:", () => {
    test("be in the document", () => {
      const { getByTestId } = render(<Notification />);
      expect(getByTestId("notification")).toContainElement(
        getByTestId("yesButton")
      );
    });
    test("be green", () => {
      const { getByTestId } = render(<Notification />);
      expect(getByTestId("yesButton")).toHaveStyle({
        style: { backgroundColor: "green" },
      });
    });
    test("have an onClick", () => {
      const { getByTestId } = render(<Notification />);
      expect(getByTestId("yesButton")).toHaveProp({ prop: "onClick" });
    });
  });

  describe("No button should:", () => {
    test("be in the document", () => {
      const { getByTestId } = render(<Notification />);
      expect(getByTestId("notification")).toContainElement(
        getByTestId("noButton")
      );
    });
    test("be red", () => {
      const { getByTestId } = render(<Notification />);
      expect(getByTestId("noButton")).toHaveStyle({
        style: { backgroundColor: "red" },
      });
    });
    test("have an onClick", () => {
      const { getByTestId } = render(<Notification />);
      expect(getByTestId("noButton")).toHaveProp({ prop: "onClick" });
    });
  });
});
