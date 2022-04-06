import { useEffect, useState } from "react";
import styles from "../../styles/Info.module.css";
import { Socials, Social, FetchSocials } from "../../lib/Socials";
import { useRouter } from "next/router";

const Info = () => {
  const [socials, setSocials] = useState<Social[]>([
    { name: "", link: "", icon: "" },
  ]);
  const router = useRouter();
  const { keyword } = router.query;

  useEffect(() => {
    FetchSocials().then((value: Socials) => {
      value.socials.forEach((value) => {
        if (value.keyword === keyword) setSocials(value.socials);
      });
    });
  }, [keyword]);

  const Icon = (props: { iconUrl: string }) => {
    if (props.iconUrl === "")
      return <div className={styles.socialElementIcon} />;
    else
      return <img src={props.iconUrl} className={styles.socialElementIcon} />;
  };

  return (
    <div className={styles.socials}>
      {socials.map((value, index) => {
        return (
          <div
            className={styles.socialElement}
            key={index}
            onClick={() => {
              window.open(value.link, "_blank");
            }}
          >
            <Icon iconUrl={value.icon} />
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
