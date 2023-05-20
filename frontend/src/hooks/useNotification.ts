import { ToastOptions, toast} from "react-toastify";

export const useNotification = () => {
    const options: ToastOptions = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
            backgroundColor: "#fefefe", 
            boxShadow: "2px 7px 5px rgba(0, 0, 0, 0.2)",
            border: "solid 2px #f1f1f1",
            zIndex: "15"
        }
    };

    const successNotification = (message: string) => {
        toast.success(message, options);
    };

    const errorNotification = (message: string) => {
        toast.error(message, options);
    };

    const warningNotification = (message: string) => {
        toast.warn(message, options);
    }

    return {
        successNotification,
        errorNotification,
        warningNotification
    };
};