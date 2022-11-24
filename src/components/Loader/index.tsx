import styles from "./styles.module.scss";

interface Props {
  color: string;
  size?: number;
}

export const Loader = ({ size, color }: Props) => {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderColor: color,
      }}
      className={styles.loader}
    />
  );
};
