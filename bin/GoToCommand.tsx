import CommandInterface from "./CommandInterface";

const GotoCommand: CommandInterface = {
  command: "goto",
  exe: (input: string[]): string => {
    if (input.length != 1) return "Error: Command only takes one Argument";

    window.location.href = "/" + input[0];

    return "";
  },
};

export default GotoCommand;
