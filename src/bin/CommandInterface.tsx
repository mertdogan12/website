interface CommandInterface {
  command: string;
  exe(input: string[]): string;
}

export default CommandInterface;
