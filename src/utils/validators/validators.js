export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = (value) => value ? undefined : "Required field!"

export const maxLength = (number) => (value) => {
    if(value && number < value.length) return `Max length is ${number} symbols!`
    return undefined
}
