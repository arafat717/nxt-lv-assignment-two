import Joi from "joi";

const userValidationSchema = Joi.object({
  userId: Joi.number().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullName: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }).required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
  isActive: Joi.boolean().required(),
  hobbies: Joi.array().items(Joi.string().max(10)).required(),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
  orders: Joi.array().items(
    Joi.object({
      productName: Joi.string(),
      price: Joi.number(),
      quantity: Joi.number(),
    })
  ),
  isdeleted: Joi.boolean(),
});

export default userValidationSchema;
