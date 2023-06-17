import axios from 'axios';
// import { useContext } from 'react';
import { toast } from 'react-toastify';
// import TRRContext, { TRRContextProps } from '../TRRContext';
import catchHandler from '../controllers/catch';
import thenHandler from '../controllers/then';
import { getRequestProps } from '../types/get';

export const handleGet = ({ url, cb, condition, config, loadingText }: getRequestProps) => {

    const resolveReactToast = new Promise((resolve, reject) => {
        axios.get(url, config)
            .then((res) => {
                return thenHandler({
                    cb,
                    condition,
                    reject,
                    res,
                    resolve
                })
            })
            .catch((err) => {
                return catchHandler({
                    err,
                    reject,
                    cb,
                    condition
                })
            })
    });
    toast.promise(
        resolveReactToast,
        {
            pending: String(loadingText || "Loading..."),
            success: {
                render(props: any) {
                    return typeof props.data == 'string' ? props.data : JSON.stringify(props.data)
                },
            },
            error: {
                render(props: any) {
                    return typeof props.data == 'string' ? props.data : JSON.stringify(props.data)
                }
            }
        }
    )
}

