export const statusIsValid: (number) => boolean = status => {
    return status >= 200 && status < 400
}