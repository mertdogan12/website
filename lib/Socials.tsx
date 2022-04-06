interface Social {
  name: string;
  link: string;
  icon: string;
}

interface Socials {
  socials: Social[];
  websiteInfo: string;
  defaultEffect: string;
}

const FetchSocials = async (): Promise<Socials> => {
  return await (
    await fetch("https://github.mert.nrw/mertdogan12/info.json")
  ).json();
};

export { FetchSocials };
export type { Social, Socials };
