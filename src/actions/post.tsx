import axios from 'axios';
import { toast } from 'react-toastify';
import catchHandler from '../controllers/catch';
import thenHandler from '../controllers/then';
import { postRequestProps } from '../types/post';

export const handlePost = ({
    data,
    url,
    cb,
    condition,
    config,
    loadingText
}: postRequestProps) => {
    const resolveReactToast = new Promise((resolve, reject) => {

        axios.post(url, data, config)
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
            // success: 'success',
            // error: 'error',
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

