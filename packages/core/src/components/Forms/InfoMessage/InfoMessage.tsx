import { clsx } from "clsx";
import { useContext } from "react";
import { setId } from "@core/utils";
import { HvBaseProps } from "@core/types";
import { StyledTypography } from "./InfoMessage.styles";
import { HvFormElementContext } from "../FormElement";
import infoMessageClasses, { HvInfoMessageClasses } from "./infoMessageClasses";

export interface HvInfoMessageProps extends HvBaseProps {
  /** If `true` the label is disabled. */
  disabled?: boolean;
  /** If `true` the info message won't have margins. */
  disableGutter?: boolean;
  /** A Jss Object used to override or extend the styles applied to the component. */
  classes?: HvInfoMessageClasses;
}

/**
 * Provides the user with additional descriptive text for the form element.
 */
export const HvInfoMessage = ({
  id,
  classes,
  className,
  children,
  disabled,
  disableGutter = false,
  ...others
}: HvInfoMessageProps) => {
  const { elementId, elementDisabled } = useContext(HvFormElementContext);
  const localDisabled = disabled || elementDisabled;
  const localId = id ?? setId(elementId, "description");

  return (
    <StyledTypography
      id={localId}
      className={clsx(
        className,
        infoMessageClasses.root,
        classes?.root,
        localDisabled &&
          clsx(infoMessageClasses.infoDisabled, classes?.infoDisabled),
        !disableGutter && clsx(infoMessageClasses.gutter, classes?.gutter)
      )}
      variant="body"
      component="label"
      $infoDisabled={!!localDisabled}
      $gutter={!disableGutter}
      {...others}
    >
      {children}
    </StyledTypography>
  );
};
