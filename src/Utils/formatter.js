import { date } from "random-js"

export const formatDate = (param)=>{
   
const newDate = new Date(param).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })

    return newDate
}

export  const  today = ()=>{
  const today = new Date().toLocaleDateString()

  return today
}