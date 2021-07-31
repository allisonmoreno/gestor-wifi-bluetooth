import validate from "validate.js"

const constraints = {
  email: {
    presence: {
      message: "^Por favor introduzca una dirección de correo eléctronico"
    },
    email: {
      message: "^Por favor, introduce una dirección de correo electrónico válida"
    }
  },

  password: {
    presence: {
      message: "^Por favor ingrese una contraseña."
    },
    length: {
      minimum: 5,
      message: "^Tu contraseña debe tener al menos 5 caracteres"
    }
  },
  required: {
    presence: {
      allowEmpty: false,
      message: "^El campo no debe estar vacío."
    }
  },
  number: {
    numericality: {
      strict: true,
      message: "^El valor debe de ser numérico"
    }
  },

  rfc: {
    length: {
      minimum: 12,
      tooShort: "^El RFC necesita tener al menos %{count} caracteres"
    }
  },
};

export default function is_valid(fieldName, value) {
  var formValues = {}
  formValues[fieldName] = value
 
  var formFields = {}
  formFields[fieldName] = constraints[fieldName]
 
  const result = validate(formValues, formFields)

  if (result) {
    return {valid: false, message: result[fieldName][0]}
  }
  return {valid: true, message: ''}
}