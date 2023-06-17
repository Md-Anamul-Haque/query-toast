export * from 'axios';
import axios from 'axios';
import React from 'react';
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


export type QTContainerProps = ({ withCredentials, toastContainerProps }: {
  withCredentials?: boolean | "yes" | "no" | undefined;
  toastContainerProps?: ToastContainerProps;
}) => JSX.Element;

// --------------------------------------------------------------

export const QTContainer: QTContainerProps = ({ withCredentials, toastContainerProps }) => {
  try {
    axios.defaults.withCredentials = withCredentials ? withCredentials === 'yes' || withCredentials === true : false;
  } catch (error) {

  }
  return (
    <ToastContainer {...toastContainerProps} />
  )
}