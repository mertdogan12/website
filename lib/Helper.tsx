const ParseLinks = (input: string, aClassName: string) => {
  const splitString: string[] = input.split(" ");

  return (
    <span>
      {splitString.map((value, index) => {
        if (value.includes("://"))
          return (
            <a className={aClassName} key={index} href={value}>
              {value.slice(value.search("://") + 3, value.length)}
            </a>
          );
        else return value + " ";
      })}
    </span>
  );
};

export { ParseLinks };
