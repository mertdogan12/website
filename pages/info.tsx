import { useEffect, useState } from "react";
import styles from "../styles/Info.module.css";

const Info = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch("https://github.mert.nrw/mertdogan12/info.json")
      .then((respons) => respons.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div>
      <pre className={styles.info}>{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
};

export default Info;
