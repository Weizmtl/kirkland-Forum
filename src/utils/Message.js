import { Message } from 'element-plus';
import { de } from 'element-plus/es/locale';

const showMessage = (msg, callback, type) => {
    ElMessage({
        type: "type",
        message: msg,
        duration: 2000,
        onClose: () => {
            if (callback) {

            }
        }
    })
}
const message = {
    error: (msg, callback) => {
        showMessage(msg, callback, "error");
    },
    success: (msg, callback) => {
        showMessage(msg, callback, "success");
    },
    warning: (msg, callback) => {
        showMessage(msg, callback, "warning");
    },

}



export default message;