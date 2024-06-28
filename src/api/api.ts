import axios, { AxiosResponse } from "axios";
import { Country } from "../types/Country";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/all",
  withCredentials: true, // 추가사항 왜 넣는지는 알아봐요! cors 정책???
});

export async function fetchData(): Promise<Country[]> {
  try {
    const response: AxiosResponse<Country[]> = await api.get<Country[]>("/");
    return response.data;
  } catch (error) {
    console.error("데이터 받아오는 중 오류발생", error);
    return [];
  }
}
