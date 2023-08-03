import { ReactNode } from "react";

export enum fontWeight {
  LIGHT = "300",
  REGULAR = "400",
  MEDIUM = "500",
  SEMI_BOLD = "600",
  BOLD = "bold",
  EXTRA_BOLD = "800",
}

export interface HeadingProps {
  className?: string;
  level?: "lg" | "md" | "sm";
  weight?: fontWeight;
  children?: ReactNode;
  [prop: string]: any;
}

export interface TextProps {
  className?: string;
  level?: "lg" | "md" | "sm";
  weight?: fontWeight;
  children?: ReactNode;
  [prop: string]: any;
}
