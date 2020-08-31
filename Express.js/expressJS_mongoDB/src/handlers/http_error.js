// Personalised http error model based on the built in method.

class HttpError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
    status() {
        return {
            succeeded: false,
            code: this.code,
            message: this.message,
        };
    }
}

module.exports = HttpError;