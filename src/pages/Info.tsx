import { useEffect, useState } from "react";
import "./info.css";

const Info = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    console.log("test");

    fetch(
      "https://raw.githubusercontent.com/mertdogan12/mertdogan12/main/info.json"
    )
      .then((respons) => respons.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div>
      <pre className="Info">{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
};

export default Info;
