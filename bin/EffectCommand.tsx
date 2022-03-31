import CommandInterface from "./CommandInterface";

const EchoCommand: CommandInterface = {
  command: "effect",
  description: "Change the terminal effect",
  exe: (input: string[]): string => {
    document.getElementById("effectMain")?.className = input[0] + "Effect";

    return "Effect: " + input[0];
  },
};

export default EchoCommand;
