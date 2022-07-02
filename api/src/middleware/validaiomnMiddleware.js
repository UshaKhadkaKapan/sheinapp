import Joi from "joi";

export const adminRegistrationValidation = (req, res, next) => {
  console.log(req.body);
  const schema = Joi.object({
    fName: Joi.string().min(3).max(50).required(),
    lName: Joi.string().min(3).max(50).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).max(50).required(),
    password: Joi.string().min().max(50).required(),
  });
  const result = schema.validate(req.body);
  console.log(result);
};
