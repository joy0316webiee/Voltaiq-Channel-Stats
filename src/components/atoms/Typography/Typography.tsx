import { FC } from "react";
import cn from "clsx";

// types
import { HeadingProps, TextProps, fontWeight } from "./Typography.types";

// styles
import { useStyles } from "./Typography.styles";

const Heading: FC<HeadingProps> = ({
  className = "",
  level = "lg",
  weight = fontWeight.REGULAR,
  children,
  ...rest
}) => {
  const styles = useStyles({ weight, level });

  const headingClasses = cn({
    [styles.typography]: true,
    [styles.heading]: true,
    [className || ""]: className,
  });

  switch (level) {
    default:
    case "lg":
      return (
        <h1 className={headingClasses} {...rest}>
          {children}
        </h1>
      );
    case "md":
      return (
        <h2 className={headingClasses} {...rest}>
          {children}
        </h2>
      );
    case "sm":
      return (
        <h3 className={headingClasses} {...rest}>
          {children}
        </h3>
      );
  }
};

const Text: FC<TextProps> = ({
  className = "",
  level = "lg",
  weight = fontWeight.REGULAR,
  children,
  ...rest
}) => {
  const styles = useStyles({ weight, level });

  const textClasses = cn({
    [styles.typography]: true,
    [styles.text]: true,
    [className || ""]: className,
  });

  return (
    <span className={textClasses} {...rest}>
      {children}
    </span>
  );
};

export { Heading, Text };
