import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import MovieForm from "../modals/MovieForm/movieForm";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLoaderData: () => null, 
}));

const renderWithPortal = (component: string | number | boolean | React.JSX.Element | Iterable<React.ReactNode> | null | undefined) => {
  const portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "portal-root");
  document.body.appendChild(portalRoot);

  return render(<MemoryRouter initialEntries={["/new"]}>{component}</MemoryRouter>);
};

describe("MovieForm", () => {
  beforeEach(() => {
    renderWithPortal(<MovieForm />);
  });

  test("renders the MovieForm component", () => {
    expect(screen.getByText(/Add Movie/i)).toBeInTheDocument();
  });

  test("renders form submission button", () => {
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  test("renders form reset button and clears form when clicked", () => {
    const resetButton = screen.getByText(/Reset/i);
    expect(resetButton).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText("Movie Name"), { target: { value: "Test Movie" } });
    expect(screen.getByPlaceholderText("Movie Name")).toHaveValue("Test Movie");
    fireEvent.click(resetButton);
    expect(screen.getByPlaceholderText("Movie Name")).toHaveValue("");
  });
  
  test("displays 'ADD MOVIE' instead of 'EDIT MOVIE'", () => {
    expect(screen.getByText(/Add Movie/i)).toBeInTheDocument();
    expect(screen.queryByText("Edit Movie")).toBeNull();
  });

  test("displays form validation errors for mandatory fields", async () => {
    
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.submit(submitButton);

    await screen.findAllByText("Title is required");
    await screen.findAllByText("Release date is required");
    await screen.findAllByText("Movie URL is required");
    await screen.findAllByText("Rating is required");
    await screen.findAllByText("Select At least one Genre.");
    await screen.findAllByText("Runtime is required");
    await screen.findAllByText("Overview is required");
  });
});