import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import catchHandler from '../controllers/catch';
import thenHandler from '../controllers/then';
import { deleteRequestProps } from '../types/delete';

export const handleDelete = ({
    url, alertMessage, cb, condition, config, loadingText
}: deleteRequestProps) => {
    Swal.fire({
        title: alertMessage ? alertMessage : 'Are you sure you want to delete this item?',
        icon: 'question',
        backdrop: false,
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonText: "Yes, I'm sure",
        cancelButtonText: 'No, cancel!',
        confirmButtonColor: '#EE4B2B',
        reverseButtons: true,
        customClass: {
            title: 'mb-4 text-gray-500 dark:text-gray-300 text-base',
            popup: 'p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5',
            confirmButton: 'mx-3 py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900',
            cancelButton: 'mx-3 py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
        },
        buttonsStyling: false,
    }).then((result: any) => {
        if (result.isConfirmed) {
            const resolveReactToast = new Promise((resolve, reject) => {
                axios.delete(url, config)
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
    })
}

