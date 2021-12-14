import { KeyboardEvent, useState } from "react";
import CommandLine from "./CommandLine";

type Command = {
  command: string;
  output: string;
};

const Home = () => {
  const [log, setLog] = useState<Command[]>([]);
  let userName: string = "guest";
  let computerName: string = "NaN";

  const input = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      const target: HTMLInputElement = e.target as HTMLInputElement;
      if (target.value) {
        let command: Command = { command: target.value, output: "" };

        switch (target.value) {
          case "clear":
            setLog([]);
            break;

          default:
            command.output = "Command not found: " + target.value;

            setLog([...log, command]);
        }

        target.value = "";
      }
    }
  };

  return (
    <div>
      <div className="home" id="log">
        {log.map((value, index) => {
          return (
            <div>
              <p className="home" id="cmdLine">
                {userName}@{computerName} {">"} {value.command}
              </p>
              <p className="home" key={index}>
                {value.output}
              </p>
            </div>
          );
        })}
      </div>
      <CommandLine onKeyDown={input} name={userName} computer={computerName} />
    </div>
  );
};

export default Home;
