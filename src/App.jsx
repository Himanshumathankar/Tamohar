import { text } from "express"
import { useState } from "react"
import background from "./components/background/background";

const app = () => {
  let herodata = [
    {text1:"",text2:""}
  ]
  const [playstatus,setplaystatus] = useState(true);
  return (
    <div>
      <background playstatus={playstatus}/>
    </div>
  )
}

export default app