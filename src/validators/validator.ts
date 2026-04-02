import  Joi from "joi";


const validator = Joi.object({
    username: Joi.string().pattern(/w{4,}/).required().messages({
        'string.pattern.base':'name must have at least 4 chars'
    }) ,
    password: Joi.string().min(3).max(6).required().messages({
        'string.min':'password can be at least 3 chars',
        'string.max':'password cannot be more than  6 chars'
    }),
    age: Joi.number().min(1).max(117).required().messages({
        'number.min':'age must be at least 1 year',
        'number.max':'age must be not more than 117 year'
    }),
});
export {validator}