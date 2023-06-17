import { AxiosResponse } from "axios";
import { cbProps } from "../types/cbProps";
import { conditionProps } from "../types/conditionProps";
declare type thenHandlerProps = {
    condition?: conditionProps;
    res: AxiosResponse;
    cb?: cbProps;
    resolve: any;
    reject: any;
};
declare const thenHandler: ({ condition, res, cb, resolve, reject, }: thenHandlerProps) => any;
export default thenHandler;
