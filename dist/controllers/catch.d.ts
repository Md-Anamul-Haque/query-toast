import { AxiosError } from "axios";
import { cbProps } from "../types/cbProps";
import { conditionProps } from "../types/conditionProps";
declare type catchHandlerProps = {
    cb?: cbProps;
    reject: any;
    err: AxiosError;
    condition?: conditionProps;
};
declare const catchHandler: ({ cb, reject, err, condition }: catchHandlerProps) => any;
export default catchHandler;
