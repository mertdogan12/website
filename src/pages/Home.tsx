import { KeyboardEvent, useState } from "react";
import CommandLine from "./CommandLine";

const Home = () => {
  const [log, setLog] = useState<string[]>([]);

  const input = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      const target: HTMLInputElement = e.target as HTMLInputElement;
      if (target.value) {
        setLog([...log, target.value]);
        target.value = "";
      }
    }
  };

  return (
    <div>
      <div>
        {log.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>
      <CommandLine onKeyDown={input} name="guest" computer="NaN" />
    </div>
  );
};

export default Home;
