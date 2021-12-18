import CommandInterface from "./CommandInterface";

const EchoCommand: CommandInterface = {
  command: "echo",
  exe: (input: string[]): string => {
    return input.join(" ");
  },
};

export default EchoCommand;
