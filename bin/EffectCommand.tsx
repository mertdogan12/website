import CommandInterface from "./CommandInterface";

const EchoCommand: CommandInterface = {
  command: "effect",
  description: "Change the terminal effect",
  exe: (input: string[]): string => {
    const effectMain: HTMLElement | null =
      document.getElementById("effectMain");
    if (effectMain == null)
      return "Error: div with id 'effectMain' does not exist";

    effectMain.className = input[0].toLowerCase() + "Effect";

    return "Effect: " + input[0];
  },
};

export default EchoCommand;
