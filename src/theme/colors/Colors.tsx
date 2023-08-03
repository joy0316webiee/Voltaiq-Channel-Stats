import { FC } from "react";

// colors
import { colors, ColorName } from ".";

// styles
import { useStyles } from "./Colors.styles";

const Colors: FC = () => {
  const styles = useStyles();

  return (
    <ul className={styles.root}>
      {Object.entries(colors).map(([key, value], idx) => (
        <li className={styles.cell} key={idx}>
          <div
            className={styles.content}
            style={{ backgroundColor: colors[key as ColorName] }}
          >
            <span className={styles.hexCode}>{value}</span>
          </div>
          <div className={styles.name}>{key}</div>
        </li>
      ))}
    </ul>
  );
};

export { Colors };
