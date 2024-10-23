function validatePan(panNumber) {
    // Regular expression pattern for PAN format: 5 letters, 4 digits, and 1 letter
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    return panPattern.test(panNumber)? true :false
}
export default validatePan 
