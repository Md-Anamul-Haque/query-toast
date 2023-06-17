/// <reference types="react" />
export * from 'axios';
export * from 'react-toastify';
import { ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export declare const QT: {
    get: ({ url, cb, condition, config, loadingText }: import("./types/get").getRequestProps) => void;
    post: ({ data, url, cb, condition, config, loadingText }: import("./types/post").postRequestProps) => void;
    put: ({ data, url, cb, condition, config, loadingText }: import("./types/put").putRequestProps) => void;
    delete: ({ url, alertMessage, cb, condition, config, loadingText }: import("./types/delete").deleteRequestProps) => void;
};
export declare const GET: ({ url, cb, condition, config, loadingText }: import("./types/get").getRequestProps) => void;
export declare const POST: ({ data, url, cb, condition, config, loadingText }: import("./types/post").postRequestProps) => void;
export declare const PUT: ({ data, url, cb, condition, config, loadingText }: import("./types/put").putRequestProps) => void;
export declare const DELETE: ({ url, alertMessage, cb, condition, config, loadingText }: import("./types/delete").deleteRequestProps) => void;
export declare type QTContainerProps = ({ withCredentials, toastContainerProps }: {
    withCredentials?: boolean | "yes" | "no" | undefined;
    toastContainerProps?: ToastContainerProps;
}) => JSX.Element;
export declare const QTContainer: QTContainerProps;
