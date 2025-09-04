import {  toast } from 'react-toastify';
export const Success = (message) => toast.success(message);
export const Error = (message) => toast.error(message);
export const Warning = (message) => toast.warning(message);
export const Info = (message) => toast.info(message);
