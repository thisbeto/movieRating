import axios, { type AxiosPromise } from "axios" 
import type { MovieData } from "../interface/MovieData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<MovieData[]> => {
    const response = axios.get(API_URL + '/movie')
    return response;
}

export function useMovieData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['movie-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}