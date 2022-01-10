import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("<Input />", () => {
  describe("Text Input", () => {
    it("has a labelText", () => {
      render(<Input labelText="First name" />);
      expect(screen.getByLabelText("First name")).toBeVisible();
    });
    it("has a value", () => {
      render(<Input labelText="First name" value="Kristin" />);
      expect(screen.getByLabelText("First name")).toBeVisible();
      expect(screen.getByLabelText("First name")).toHaveDisplayValue("Kristin");
    });
    test("onChange returns the current value of the input", () => {
      const mockOnChange = jest.fn();
      render(
        <Input labelText="First name" value="Kristin" onChange={mockOnChange} />
      );
      userEvent.type(screen.getByLabelText("First name"), "a");
      expect(mockOnChange).toHaveBeenCalledWith("Kristina");
    });
  });
});
