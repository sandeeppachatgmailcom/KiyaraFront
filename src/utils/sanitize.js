const sanitizeInput = (input) => {
    return input?.length ? input.replace(/[<>]/g, '') : input;
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidPassword = (password) => {
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
};

const sanitizeBody = async (dataObj) => {
    const temp = {};

    try {
        await Promise.all(Object.keys(dataObj).map((key) => {
            let value = sanitizeInput(dataObj[key]);

            if (key === 'email' && !isValidEmail(value)) {
                throw new Error('Invalid email format');
            }
            
            if (key === 'password' && !isValidPassword(value)) {
                throw new Error('Password must be at least 8 characters long, alphanumeric, with at least one uppercase and one lowercase letter.');
            }

            temp[key] = value;
        }));

        // Return success with the sanitized data
        return { status: true, sanitizedData: temp };
        
    } catch (error) {
        // Return failure with the error message
        return { status: false, message: error.message };
    }
};

export default sanitizeBody;
