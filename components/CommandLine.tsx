import { KeyboardEvent } from "react";
import styles from "../styles/Home.module.css";

interface Props {
  name: string;
  computer: string;
  onKeyDown(e: KeyboardEvent<HTMLInputElement>): void;
}

const CommandLine = (props: Props) => {
  return (
    <div className={styles.commandLine}>
      <span className={styles.commandLine}>
        {props.name}@{props.computer} {">"}
      </span>
      <input
        className={styles.commandLine}
        type="text"
        id="cmd-input"
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
};

export default CommandLine;
