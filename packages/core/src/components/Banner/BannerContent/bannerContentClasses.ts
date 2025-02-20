import { getClasses } from "@core/utils";

export interface HvBannerContentClasses {
  outContainer?: string;
  root?: string;
  message?: string;
  action?: string;
  baseVariant?: string;
  success?: string;
  warning?: string;
  error?: string;
  info?: string;
  default?: string;
}

const classKeys: (keyof HvBannerContentClasses)[] = [
  "outContainer",
  "root",
  "message",
  "action",
  "baseVariant",
  "success",
  "warning",
  "error",
  "info",
  "default",
];

const bannerContentClasses = getClasses(classKeys, "HvBanner-Content");

export default bannerContentClasses;
