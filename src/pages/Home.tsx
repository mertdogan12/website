import { KeyboardEvent, useEffect, useState } from "react";
import { ExecuteCommand } from "../bin/Path";
import CommandLine from "./CommandLine";

type CommandElement = {
  command: string;
  output: string;
};

type Json = {
  socials: string[][];
  websiteInfo: string;
};

const Home = () => {
  const [log, setLog] = useState<CommandElement[]>([]);
  const [json, setJson] = useState<Json>({ socials: [[""]], websiteInfo: "" });
  let userName: string = "guest";
  let computerName: string = "NaN";

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/mertdogan12/mertdogan12/main/info.json"
    )
      .then((respons) => respons.json())
      .then((data) => setJson(data));
  }, []);

  const parseLinks = (input: string) => {
    const splitString: string[] = input.split(" ");

    return (
      <span>
        {splitString.map((value, index) => {
          if (value.includes("http"))
            return (
              <a key={index} href={value}>
                {value}
              </a>
            );
          else return value + " ";
        })}
      </span>
    );
  };

  const input = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      const target: HTMLInputElement = e.target as HTMLInputElement;
      if (target.value) {
        let command: CommandElement = { command: target.value, output: "" };

        switch (target.value) {
          case "clear":
            setLog([]);
            break;

          default:
            const input: string[] = target.value.split(" ");
            let output: string | undefined = ExecuteCommand(
              input[0],
              input.slice(1)
            );

            if (output === undefined) output = "Command not found: " + input[0];

            command.command = input[0];
            command.output = output;

            setLog([...log, command]);
        }

        target.value = "";
      }
    }
  };

  return (
    <div>
      <div>
        <p className="home" id="websiteInfo">
          {parseLinks(json.websiteInfo)}
        </p>
        <div className="home" id="socials">
          <p className="home">Socials: </p>
          <ul className="home">
            {json.socials.map((value, index) => {
              return (
                <li key={index} className="home">
                  <a className="home" href={value[1]}>
                    {value[0]}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="home" id="log">
        {log.map((value, index) => {
          return (
            <div key={index}>
              <p className="home" id="cmdLine">
                {userName}@{computerName} {">"} {value.command}
              </p>
              <p className="home" id="cmdOut">
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
