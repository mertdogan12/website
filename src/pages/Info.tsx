import { useEffect, useState } from "react";

const Info = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    console.log("test");

    fetch(
      "https://raw.githubusercontent.com/mertdogan12/mertdogan12/main/info.json"
    )
      .then((respons) => respons.text())
      .then((data) => setInfo(JSON.stringify(data, null, "\t")));
  }, []);

  return <p>{info}</p>;
};

export default Info;
