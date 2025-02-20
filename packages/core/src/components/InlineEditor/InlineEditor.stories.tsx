import { Meta, StoryObj } from "@storybook/react";
import {
  HvContainer,
  HvGrid,
  HvInlineEditor,
  HvInlineEditorProps,
  HvTypographyVariants,
} from "@core/components";
import { useState } from "react";

const meta: Meta<typeof HvInlineEditor> = {
  title: "Components/Inline Editor",
  component: HvInlineEditor,
};
export default meta;

export const Main: StoryObj<HvInlineEditorProps> = {
  args: {
    showIcon: false,
    variant: "body",
  },
  argTypes: {
    classes: { control: { disable: true } },
  },
  render: (args) => {
    return (
      <div style={{ width: 300 }}>
        <HvInlineEditor {...args} />
      </div>
    );
  },
};

export const LargeVariants = () => {
  const [value, setValue] = useState(
    "Very very very long text that is likely to be truncated"
  );
  const variants: HvTypographyVariants[] = [
    "display",
    "title1",
    "title2",
    "title3",
    "title4",
    "body",
    "label",
    "caption1",
    "caption2",
  ];

  return (
    <HvContainer>
      <HvGrid container>
        {variants.map((variant) => (
          <HvGrid item key={variant} xs={12} sm={6} style={{ minHeight: 64 }}>
            <HvInlineEditor
              variant={variant}
              value={value}
              onBlur={(evt, val) => setValue(val)}
              onChange={(evt, val) => setValue(val)}
            />
          </HvGrid>
        ))}
      </HvGrid>
    </HvContainer>
  );
};
