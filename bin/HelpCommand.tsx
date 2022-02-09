import CommandInterface from "./CommandInterface";
import Path from "./Path";

const HelpCommand: CommandInterface = {
  command: "help",
  description: "Helps you",
  exe: (): string => {
    const out: string[] = Path.map((value: CommandInterface) => {
      return value.command + ": " + value.description;
    });

    return out.join("\n");
  },
};

export default HelpCommand;
