export * from 'axios';
import axios from 'axios';
import React, { ReactNode } from 'react';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleDelete } from "./actions/delete";
import { handleGet } from './actions/get';
import { handlePost } from './actions/post';
import { handlePut } from './actions/put';

export const QT = {
  get: handleGet,
  post: handlePost,
  put: handlePut,
  delete: handleDelete,
}
export const GET = handleGet;
export const POST = handlePost;
export const PUT = handlePut;
export const DELETE = handleDelete;
// ----------------------------------------------

type containerProps = {
  withCredentials?: boolean | "yes" | "no" | undefined;
  toastContainerProps?: ToastContainerProps;
}
export type QTProviderProps = ({ children, configs }: {
  children: ReactNode;
  configs?: containerProps;
}) => JSX.Element;

// --------------------------------------------------------------

export const QTProvider: QTProviderProps = ({ children, configs }) => {
  const { withCredentials, toastContainerProps }: containerProps = configs || {}
  axios.defaults.withCredentials = withCredentials ? withCredentials === 'yes' || withCredentials === true : false;
  return (
    <>
      <ToastContainer {...toastContainerProps} />
      {children}
    </>
  )
}