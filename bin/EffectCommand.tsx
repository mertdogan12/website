import CommandInterface from "./CommandInterface";
import { setCookie } from "../lib/Cookies";

const EchoCommand: CommandInterface = {
  command: "effect",
  description: "Change the terminal effect",
  exe: (input: string[]): string => {
    const effectMain: HTMLElement | null =
      document.getElementById("effectMain");
    if (effectMain == null)
      return "Error: div with id 'effectMain' does not exist";

    const effect: string = input[0].toLowerCase();
    effectMain.className = `${effect}Effect`;

    setCookie("effect", effect, 30);

    return "Effect: " + input[0];
  },
};

export default EchoCommand;
