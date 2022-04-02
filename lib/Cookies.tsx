const setCookie = (name: string, value: string, exdays: number) => {
  const date: Date = new Date();
  date.setDate(date.getTime() + exdays * 1000 * 60 * 60 * 24);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

const getCookie = (name: string): string => {
  const decodedCookie: string = decodeURIComponent(document.cookie);

  const ca: string[] = decodedCookie.split(";");
  return ca.reduce((_, value) => {
    if (value.slice(0, name.length + 1) === `${name}=`)
      return value.slice(name.length + 1, value.length);
    else return "";
  }, "");
};

export { setCookie, getCookie };
