import CommandInterface from "./CommandInterface";

const EchoCommand: CommandInterface = {
  command: "echo",
  description: "Just echo the given arguments",
  exe: (input: string[]): string => {
    return input.join(" ");
  },
};

export default EchoCommand;
