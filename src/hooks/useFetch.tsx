import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/fetchService";
import axios from "axios";
import { NewsData } from "../models/newsData";
//Can make this generic to pass any api call, but keeping it simple for now.
export const useFetch = (
  params: string
): { data: NewsData | null; error: string | null; loading: boolean } => {
  const [data, setData] = useState<NewsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const fetchAllNews = async (param: string) => {
    try {
      const data = await fetchNews(param);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(
        axios.isAxiosError(error)
          ? error.message
          : "unknown error occured on fetching data"
      );
    }
  };
  useEffect(() => {
    fetchAllNews(params);
  }, []);
  return { data, error, loading };
};
