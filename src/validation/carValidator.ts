import  Joi from "joi";


const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        "string.pattern.base": "brand must consists only from letters no more than 20"
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        "number.min": "the minimal price 0",
        "number.max": "the maximum price 100000",
    }),
    year: Joi.number().min(1970).max(new Date().getFullYear()).required().messages({
        "number.min": "the year can`t be lower than 1970",
        "number.max": "the year can`t be higher than current",
    }),
});

export {carValidator}