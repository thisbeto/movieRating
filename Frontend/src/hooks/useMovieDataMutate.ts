import axios, { type AxiosPromise } from "axios" 
import type { MovieData } from "../interface/MovieData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: MovieData): AxiosPromise<string> => {
    const response = axios.post(API_URL + '/movie', data)
    return response;
}

export function useMovieDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['movie-data']
            });
        }
    })

    return mutate;
}