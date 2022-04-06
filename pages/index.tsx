import { KeyboardEvent, useEffect, useState } from "react";
import { ExecuteCommand } from "../bin/Path";
import CommandLine from "../components/CommandLine";
import styles from "../styles/Home.module.css";
import { getCookie } from "../lib/Cookies";
import { ParseLinks } from "../lib/Helper";
import { FetchSocials, Social, Socials } from "../lib/Socials";

interface CommandElement {
  command: string;
  output: string;
}

const Home = () => {
  const [log, setLog] = useState<CommandElement[]>([]);
  const [json, setJson] = useState<Socials>({
    socials: [{ name: "", link: "", icon: "" }],
    websiteInfo: "",
    defaultEffect: "retro",
  });
  const [effect, setEffect] = useState("retro");
  let userName: string = "guest";
  let computerName: string = "NaN";

  useEffect(() => {
    const effect: string = getCookie("effect");

    async () => {
      if (effect !== "") setEffect(effect);
      else setJson(await FetchSocials());
    };
  }, []);

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

            command.command = input.join(" ");
            command.output = output;

            setLog([...log, command]);
        }

        target.value = "";
      }
    }
  };

  return (
    <div>
      <div id="effectMain" className={`${effect}Effect`}>
        <p className={styles.home} id={styles.websiteInfo}>
          {ParseLinks(json.websiteInfo, styles.home)}
        </p>
        <div className={styles.home} id={styles.socials}>
          <p className={styles.home}>Socials: </p>
          <ul className={styles.home}>
            {json.socials.map((value, index) => {
              return (
                <li key={index} className={styles.home}>
                  <span>- </span>
                  <a className={styles.home} href={value.link}>
                    {value.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.home} id={styles.log}>
        {log.map((value, index) => {
          return (
            <div key={index}>
              <p className={styles.home} id={styles.cmdLine}>
                {userName}@{computerName} {">"} {value.command}
              </p>
              <p className={styles.home} id={styles.cmdOut}>
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
