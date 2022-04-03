import { useEffect, useState } from "react";
import styles from "../styles/Info.module.css";

interface Social {
  name: string;
  link: string;
  icon: string;
}

interface Json {
  socials: Social[];
  websiteInfo: string;
  defaultEffect: string;
}

const Info = () => {
  const [json, setJson] = useState<Json>({
    socials: [{ name: "", link: "", icon: "" }],
    websiteInfo: "",
    defaultEffect: "retro",
  });

  useEffect(() => {
    fetch("https://github.mert.nrw/mertdogan12/info.json")
      .then((respons) => respons.json())
      .then((data) => setJson(data));
  }, []);

  return (
    <div className={styles.socials}>
      {json.socials.map((value, index) => {
        return (
          <div className={styles.socialElement} key={index}>
            <div className={styles.socialElementIcon}>
              {() => {
                if (value.icon !== "") return <img src={value.icon} />;
              }}
            </div>
            <a className={styles.socialElementLink} href={value.link}>
              {value.name}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
