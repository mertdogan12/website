import { KeyboardEvent } from "react";

interface Props {
  name: string;
  computer: string;
  onKeyDown(e: KeyboardEvent<HTMLInputElement>): void;
}

const CommandLine = (props: Props) => {
  return (
    <div>
      <p>
        {props.name}@{props.computer}
      </p>
      <input type="text" id="cmd-input" onKeyDown={props.onKeyDown} />
    </div>
  );
};

export default CommandLine;
