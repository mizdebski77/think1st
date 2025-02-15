import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiKey, url } from "../constants/ApiData";

export const useHolidays = () => {
    return useQuery({
        queryKey: ["holidays"],
        queryFn: () => axios.get(url, { headers: { "X-Api-Key": apiKey } }),
    });
};
