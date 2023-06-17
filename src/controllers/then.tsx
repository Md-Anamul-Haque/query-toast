import { AxiosResponse } from "axios";
import { cbProps } from "../types/cbProps";
import { conditionProps } from "../types/conditionProps";

type thenHandlerProps = {
    condition?: conditionProps;
    res: AxiosResponse;
    cb?: cbProps;
    resolve: any;
    reject: any;
}
const thenHandler = ({
    condition,
    res,
    cb,
    resolve,
    reject,
}: thenHandlerProps) => {
    if (condition && condition?.data) {
        if (condition?.data(res)) {
            cb && cb(res, {})
            return resolve(condition?.message ? condition.message(res) : "success")
        } else {
            cb && cb(res, {})
            return reject(condition?.faildCondition_message ? condition.faildCondition_message(res) : condition?.message ? condition.message(res) : 'faield')
        }
    } else {
        cb && cb(res, {})
        return resolve('success')
    }
}

export default thenHandler
