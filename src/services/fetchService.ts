import axios, { AxiosRequestConfig } from "axios";
const config = () => {
  return {
    baseUrl: "https://newsapi.org/v2",
    apiKey: "96e7efbae84544aca2e40f5834bf2777",
  };
};
export const fetchNews = async (topic: string) => {
  const configs: AxiosRequestConfig = {
    params: {
      apiKey: config().apiKey,
      q:topic
    },
  };

  const response = await axios.get(
    `${config().baseUrl}/everything`,
    configs
  );
  return response.data;
};
