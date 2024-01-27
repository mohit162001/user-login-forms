import { useState } from "react";

function useInput(defaultValue, validationFunction,num) {

  const [userInput, setUserInput] = useState(defaultValue);

  const [isEdit, setIsEdit] = useState(false);

  const valueIsValid = validationFunction(userInput,num)
  
  function handleUserInput(event) {
    setUserInput(event.target.value);
    setIsEdit(false);
  }

  function handleInputBlur() {
    setIsEdit(true);
  }

  function handleClearInput(){
    setUserInput('')
    setIsEdit(false)
  }
  return(
    {
        userInput,
        handleUserInput,
        handleInputBlur,
        handleClearInput,
        hassError: isEdit && !valueIsValid
    }
  )
}

export default useInput;
