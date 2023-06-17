import { AxiosRequestConfig } from "axios";
import { cbProps } from "./cbProps";
import { conditionProps } from "./conditionProps";

export interface deleteRequestProps {
    url: string,
    alertMessage?: string;
    condition?: conditionProps;
    cb?: cbProps;
    config?: AxiosRequestConfig;
    loadingText?: string;
}
