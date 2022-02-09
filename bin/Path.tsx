import CommandInterface from "./CommandInterface";
import EchoCommand from "./EchoCommand";
import GotoCommand from "./GoToCommand";

const Path: CommandInterface[] = [EchoCommand, GotoCommand];

const ExecuteCommand = (
  command: string,
  args: string[]
): string | undefined => {
  return Path.find((cmd) => cmd.command === command)?.exe(args);
};

export default Path;
export { ExecuteCommand };
