import { AxiosError, AxiosResponse } from "axios";

export type cbProps = (response: AxiosResponse | any, error: AxiosError | any) => any