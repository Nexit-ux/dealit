const Joi = require("joi");
const categories = require("./utils/categories");

module.exports.postingSchema = Joi.object({
    posting : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        location : Joi.string().required(),
        price : Joi.number().required(),
        country : Joi.string().required(),
        image: Joi.array().items(
            Joi.object({
                url: Joi.string().allow("", null),
                filename: Joi.string().allow("", null),
            })
        ),
        category: Joi.string().valid(...categories)
    .required(),
    }).required()
});
