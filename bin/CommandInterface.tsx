interface CommandInterface {
  command: string;
  description?: string;
  exe(input: string[]): string;
}

export default CommandInterface;
