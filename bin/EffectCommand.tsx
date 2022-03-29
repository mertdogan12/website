import CommandInterface from "./CommandInterface";

const EchoCommand: CommandInterface = {
  command: "effect",
  description: "Change the terminal effect",
  exe: (input: string[]): string => {
    return "Effect: " + input[0];
  },
};

export default EchoCommand;
