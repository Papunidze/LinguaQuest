export const buildRequestUrl = (reqUrl: string) => {
  return `${process.env.SERVER_URL}${reqUrl}`;
};
