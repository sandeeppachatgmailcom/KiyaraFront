import isValidPassword from "./isValidPassword";
import validateEmail from "./validateEmail";

const sanitizeInput = (input) => {
    return input?.length ? input.replace(/[<>]/g, '') : input;
}; 
  


const sanitizeBody = async (dataObj) => {
    const temp = {};

    try {
        await Promise.all(Object.keys(dataObj).map((key) => {
            let value = key !='password' ?sanitizeInput(dataObj[key]):dataObj[key]
            if (key === 'email' && !validateEmail(value)) {
                throw new Error('Invalid email format');
            }
            if (key === 'password' && !isValidPassword(value)) {
                throw new Error('Password must be at least 8 characters long, alphanumeric, with at least one uppercase and one lowercase letter.');
            }
            temp[key] = value;
        }));
        return { status: true, sanitizedData: temp };
        
    } catch (error) {
        return { status: false, message: error.message };
    }
};

export default sanitizeBody;
