import { AxiosError } from "axios";
import { cbProps } from "../types/cbProps";
import { conditionProps } from "../types/conditionProps";

type catchHandlerProps = {
    cb?: cbProps;
    reject: any;
    err: AxiosError;
    condition?: conditionProps;
}
const catchHandler = ({
    cb, reject, err, condition
}: catchHandlerProps) => {
    cb && cb({}, err)
    return reject(condition?.catchError_message ? condition.catchError_message(err) : err?.message || 'error')
}

export default catchHandler