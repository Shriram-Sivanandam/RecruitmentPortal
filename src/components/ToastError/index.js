import { toast } from "react-toastify";

const toastError = (e) => {
  const error = e.networkError?.result?.errors[0]?.message || e.toString();
  console.log(error);
  toast.error(error);
};

export default toastError;