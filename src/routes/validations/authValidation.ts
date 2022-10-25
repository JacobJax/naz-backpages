const Joi = require('joi')

interface requestObject {
   username: string,
   password: string
}

// validate registration data
const registerValidation = (data: requestObject) => {
   const schema = Joi.object({
      username: Joi.string()
         .required()
         .min(3)
         .max(22),
      password: Joi.string()
         .required()
         .pattern(RegExp(/^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,128}$/))
         .message("Password must be atleast 8 characters, contain uppercase and lowercase letters and special characters."),
   })

   // return Joi.validate(data, schema)
   return schema.validate(data)
}

module.exports.registerValidation = registerValidation