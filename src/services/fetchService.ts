import axios, { AxiosRequestConfig } from "axios";
const config = () => {
  return {
    baseUrl: "https://newsapi.org/v2",
    apiKey: "96e7efbae84544aca2e40f5834bf2777",
  };
};
type Err = string;
export const fetchNews = async <T>(topic: string): Promise<T | Err> => {
  const configs: AxiosRequestConfig = {
    params: {
      apiKey: config().apiKey,
      q: topic,
    },
  };

  try {
    const response = await axios.get(`${config().baseUrl}/everything`, configs);
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error)
      ? error.message
      : "unknown error occured on fetching data";
  }
};
