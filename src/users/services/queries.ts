import { useQuery } from "@tanstack/react-query"
import { Option } from "../../types/_model";
import axios, { AxiosResponse } from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export function useStates(){
    return useQuery(
        {
            queryKey: ['states'],
            queryFn:()=>axios.get<Option[]>(`${API_URL}/states`).then((res:AxiosResponse<Option[]>)=>res.data)
        }
    )
}
export function useLanguagues(){
    return useQuery(
        {
            queryKey: ['languages'],
            queryFn:()=>axios.get<Option[]>(`${API_URL}/languages`).then((res:AxiosResponse<Option[]>)=>res.data)
        }
    )
}

export function useGenders(){
    return useQuery(
        {
            queryKey: ['genders'],
            queryFn:()=>axios.get<Option[]>(`${API_URL}/genders`).then((res:AxiosResponse<Option[]>)=>res.data)
        }
    )
}

export function useSkills(){
    return useQuery(
        {
            queryKey: ['skills'],
            queryFn:()=>axios.get<Option[]>(`${API_URL}/skills`).then((res:AxiosResponse<Option[]>)=>res.data)
        }
    )
}
