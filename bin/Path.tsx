import CommandInterface from "./CommandInterface";
import EchoCommand from "./EchoCommand";
import GotoCommand from "./GoToCommand";
import HelpCommand from "./HelpCommand";
import EffectCommand from "./EffectCommand";

const Path: CommandInterface[] = [
  EchoCommand,
  GotoCommand,
  HelpCommand,
  EffectCommand,
];

const ExecuteCommand = (
  command: string,
  args: string[]
): string | undefined => {
  return Path.find((cmd) => cmd.command === command)?.exe(args);
};

export default Path;
export { ExecuteCommand };
