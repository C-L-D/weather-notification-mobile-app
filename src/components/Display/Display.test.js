// Tests for Display component
// import component
// import image
// import jest-dom native
// Display component should:
// render an image.
// image has alt text
// render given text in bold
// render given text

import Display from "./";
import image from "../../../assets/cloud.png";
import "@testing-library/jest-native/extend-expect";

describe("The display component should:", () => {
  test("render an image", () => {
    const { getByTestId } = render(<Display src={image} />);
    expect(getByTestId("image")).toBeInTheDocument();
  });
  test("image has alt text", () => {
    const { getByTestId } = render(<Display src={image} alt="alt text" />);
    expect(getByTestId("image")).toHaveProp({ prop: "alt", value: "alt text" });
  });
  test("render correct text in bold", () => {
    const { getByText } = render(<Display text="Pressure" />);
    expect(getByText("Pressure")).toBeInTheDocument();
  });
  test("render data text", () => {
    const { getByText } = render(<Display data="1234" />);
    expect(getByText("1234")).toBeInTheDocument();
  });
});
