import { AxiosRequestConfig } from "axios";
import { cbProps } from "./cbProps";
import { conditionProps } from "./conditionProps";

export interface putRequestProps {
    url: string,
    data: any;
    condition?: conditionProps;
    cb?: cbProps;
    config?: AxiosRequestConfig;
    loadingText?: string;
}
