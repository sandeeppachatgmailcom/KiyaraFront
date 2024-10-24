
const isValidPassword = (password) => {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8}$/;


    if (password.length !== 8) {
        return {
            status: false,
            message: "Password must be exactly 8 characters long."
        };
    }


    if (!passwordRegex.test(password)) {
        return {
            status: false,
            message: "Password must contain at least one uppercase letter, one lowercase letter, and one digit."
        };
    }


    return {
        status: true,
        message: "Password is valid."
    };
};

export default isValidPassword