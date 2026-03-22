const Joi = require("joi");

const ListingSchema=Joi.object({
listing:Joi.object({
title:Joi.string().required(),
price:Joi.number().required().min(0),
image:Joi.string().allow("",null),
description:Joi.string(),
country:Joi.string().allow(""),
location:Joi.string().allow()
}).required()
})


module.exports=ListingSchema;