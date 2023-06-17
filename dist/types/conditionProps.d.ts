import { AxiosError, AxiosResponse } from "axios";
export interface conditionProps {
    data?: (res: AxiosResponse) => boolean | void;
    message?: (res: AxiosResponse) => string | void;
    faildCondition_message?: (res: AxiosResponse) => string | void;
    catchError_message?: (err: AxiosError) => string | void;
}
