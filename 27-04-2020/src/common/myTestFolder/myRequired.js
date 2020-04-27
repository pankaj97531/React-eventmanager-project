/*import { createValidator } from 'revalidate';

const myRequired = createValidator(
    message=>value=>{
        if(value=="" || value==null){
            return message;
        }
    },
    field=>`${field} is required`
) 

var myRequired1 = (0,createValidator)(function (message) {
    return function (value) {
      if (value == "" || value == null) {
        return message;
      }
    };
  }, function (field) {
    return "".concat(field, " is required");
  });

*/