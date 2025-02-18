import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
  it("renders the title", () => {
    render(<Header pathName="/" />);

    const title = screen.getByTestId("header-title");

    expect(title).toBeInTheDocument();
  });
});

describe("Header", () => {
  it("renders bold Home link", () => {
    render(<Header pathName="/" />);

    const home = screen.getByText("Home");

    expect(home).toHaveClass(
      "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-bold text-white"
    );
  });
});

describe("Header", () => {
  it("renders regular Recipes link", () => {
    render(<Header pathName="/" />);

    const recipes = screen.getByText("Recipes");

    expect(recipes).toHaveClass(
      "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
    );
  });
});
