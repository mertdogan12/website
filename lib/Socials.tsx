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

const FetchSocials = async () => {};

export { FetchSocials };
export type { Social, Socials };
