import React , {useState} from 'react'

export default function UseInputsAll(title) {
  const [value , setValue] = useState(title)

  const binding = {
    value : value ,
    onChange : (e) => {
       setValue(e.target.value) 
    }
  }

  return [value , setValue , binding]
}
