import Input from "./Input";

// default export describes the component
export default {
  title: "Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

// named exports describe each story
export const TextInput = Template.bind({});
TextInput.args = {
  labelText: "First name",
  value: "Kristin",
  onChange: () => {},
};

export const TextInputWithError = Template.bind({});

TextInputWithError.args = {
  labelText: "First name",
  value: "",
  errors: ["First name is required"],
};
