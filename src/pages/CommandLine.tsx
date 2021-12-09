import { KeyboardEvent } from "react";
import "./home.css";

interface Props {
  name: string;
  computer: string;
  onKeyDown(e: KeyboardEvent<HTMLInputElement>): void;
}

const CommandLine = (props: Props) => {
  return (
    <div className="commandLine">
      <span className="commandLine">
        {props.name}@{props.computer} {">"}
      </span>
      <input
        className="commandLine"
        type="text"
        id="cmd-input"
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
};

export default CommandLine;
