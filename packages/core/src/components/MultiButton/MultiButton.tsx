import { clsx } from "clsx";
import React, { cloneElement } from "react";
import { HvButtonVariant } from "@core/components";
import { HvBaseProps } from "@core/types";
import { StyledButton, StyledRoot } from "./MultiButton.styles";
import multiButtonClasses, { HvMultiButtonClasses } from "./multiButtonClasses";

export interface HvMultiButtonProps extends HvBaseProps {
  /** If all the buttons are disabled. */
  disabled?: boolean;
  /** If the MultiButton is to be displayed vertically. */
  vertical?: boolean;
  /** Category of button to use */
  variant?: HvButtonVariant;
  /** A Jss Object used to override or extend the styles applied to the component. */
  classes?: HvMultiButtonClasses;
}

export const HvMultiButton = ({
  className,
  children,
  classes,
  disabled = false,
  vertical = false,
  variant = "secondarySubtle",
  ...others
}: HvMultiButtonProps) => {
  return (
    <StyledRoot
      className={clsx(
        className,
        multiButtonClasses.root,
        classes?.root,
        vertical && clsx(classes?.vertical, multiButtonClasses.vertical)
      )}
      $vertical={vertical}
      {...others}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childIsSelected = !!child.props.selected;

          const btn = cloneElement(child as React.ReactElement, {
            variant,
            disabled: disabled || child.props.disabled,
            "aria-pressed": childIsSelected,
            className: clsx(
              child.props.className,
              multiButtonClasses.button,
              classes?.button,
              childIsSelected &&
                clsx(multiButtonClasses.selected, classes?.selected)
            ),
          });

          const StyledBtn = StyledButton(btn);

          return React.createElement(StyledBtn);
        }
      })}
    </StyledRoot>
  );
};
