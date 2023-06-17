import { AxiosRequestConfig } from "axios";
import { cbProps } from "./cbProps";
import { conditionProps } from "./conditionProps";
export interface getRequestProps {
    url: string;
    condition?: conditionProps;
    cb?: cbProps;
    config?: AxiosRequestConfig;
    loadingText?: string;
}
