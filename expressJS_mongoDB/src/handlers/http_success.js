class HttpSuccess {
    constructor(message, code, data) {
        this.message = message;
        this.code = code;
        this.data = data;
    }
    status() {
        return {
            succeeded: true,
            code: this.code,
            message: this.message,
            data: this.data
        };
    }
}

module.exports = HttpSuccess;