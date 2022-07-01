import Joi from "joi";

export const adminRegistrationValidation = (req, res, next) => {
  console.log(req.body);
  const schema = Joi.object({
    fName: Joi.string().min(3).max(50),
    lName: Joi.string().min(3).max(50),
    email: Joi.string().email({ minDomainSegments: 2 }).max(50),
    password: Joi.string().min().max(50),
  });
};

const result = schema.validate(req.body);
