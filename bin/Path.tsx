import CommandInterface from "./CommandInterface";
import EchoCommand from "./EchoCommand";

const Path: CommandInterface[] = [EchoCommand];

const ExecuteCommand = (
  command: string,
  args: string[]
): string | undefined => {
  return Path.find((cmd) => cmd.command === command)?.exe(args);
};

export default Path;
export { ExecuteCommand };
