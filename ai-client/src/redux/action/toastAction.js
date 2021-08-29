import { toast } from "react-toastify";

export const toastAction = {
  success: (data) => {
    if (data) {
      toast.success(data, { autoClose: 2000 });
    }
  },
  error: (error) => {
    if (
      error.response &&
      error.response.data &&
      error.response.data.error &&
      error.response.data.error.message
    ) {
      toast.error(error.response.data.error.message);
    } else {
      toast.error("server error", { autoClose: 2000 });
    }
  },
};
