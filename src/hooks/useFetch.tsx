import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/fetchService";
import axios from "axios";
import { NewsData } from "../models/newsData";
//Can make this generic to pass any api call, but keeping it simple for now.

export const useFetch = (
  params: string
) => {
  const [data, setData] = useState<NewsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const fetchAllNews = async (param: string) => {
    const data = await fetchNews<NewsData>(param);
    if (typeof data === "string") {
      setError(data);
      setData(null);
    } else {
      setData(data);
      setError(null);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchAllNews(params);
  }, []);
  return { data, error, loading, setData, setError, setLoading };
};
