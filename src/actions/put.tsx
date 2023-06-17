import axios from 'axios';
import { toast } from 'react-toastify';
import catchHandler from '../controllers/catch';
import thenHandler from '../controllers/then';
import { putRequestProps } from '../types/put';

export const handlePut = ({
    data,
    url,
    cb,
    condition,
    config,
    loadingText
}: putRequestProps) => {

    const resolveReactToast = new Promise((resolve, reject) => {
        axios.put(url, data, config)
            .then((res) => {
                return thenHandler({
                    reject,
                    res,
                    resolve,
                    cb,
                    condition
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

