import axios from "axios";

export const http = axios.create({
  baseURL: `https://dummyjson.com/`,
});

export const fetchData = async (url: string) => {
  try {
    const { data } = await http.get(url);
    return data || null;
  } catch (err) {
    console.error(err);
    return [null, err];
  }
};
