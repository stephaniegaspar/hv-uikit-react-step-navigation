import { getClasses } from "@core/utils";

export interface HvRadioClasses {
  /** Styles applied to the component. */
  root?: string;
  /** Styles applied to the radio button+label container (only when a label is provided). */
  container?: string;
  /** Styles applied to the HvBaseCheckbox (only when a label is provided). */
  invalidContainer?: string;
  /** Styles applied to the radio button+label container when the radio button is disabled. */
  disabled?: string;
  /** Styles applied to the HvBaseRadio. */
  radio?: string;
  /** Styles applied to the HvBaseCheckbox (only when a label is not provided). */
  invalidRadio?: string;
  /** Styles applied to the label. */
  label?: string;
  /** Class applied to the root element if keyboard focused. */
  focusVisible?: string;
}

const classKeys: (keyof HvRadioClasses)[] = [
  "root",
  "container",
  "invalidContainer",
  "disabled",
  "radio",
  "invalidRadio",
  "label",
  "focusVisible",
];

const radioClasses = getClasses(classKeys, "HvRadio");

export default radioClasses;
