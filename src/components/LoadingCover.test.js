import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingCover from "./LoadingCover";

describe("LoadingCover", () => {
  afterEach(() => cleanup());

  it("renders", () => {
    const { asFragment } = render(<LoadingCover />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("has loading text", () => {
    const { getByTestId } = render(<LoadingCover />);
    expect(getByTestId("loadingText")).toHaveTextContent("Loading...");
  });
});
