import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello Worls as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //.. nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('if changedText==false render "good to see you!"', () => {
    render(<Greeting />);
    const textElement = screen.getByText("good to see you!", { exact: false });

    expect(textElement).toBeInTheDocument();
  });

  test('if changedText==true render exactly "Changed!"', () => {
    // Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const textElement = screen.getByText("Changed!", { exact: true });
    expect(textElement).toBeInTheDocument();
  });

  test("if changedText==true not render good to see you!", () => {
    // Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    //get throws error, query not
    const textElement = screen.queryByText("good to see you!", { exact: false });
    // expect(textElement).not.toBeInTheDocument();
    expect(textElement).toBeNull;
  
});

});

// test("renders Hello Worls as a text", () => {
//   //Arrange
//   render(<Greeting />);

//   //Act
//   //.. nothing

//   //Assert
//   const helloWorldElement = screen.getByText("Hello World", { exact: false });
//   expect(helloWorldElement).toBeInTheDocument();
// });
