import React from 'react'
import axios from 'axios'

const Login = () => {
    const [msg,setMsg] = useState('')

   let submit=async(e)=>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:8000/",{

                msg
            })
        }
        catch(e){
           console.log(e)
        }
    }
  return (
    <>
      <div className="cont">
        <form action="" method="post">
        <textarea name="text" id="" onChange={(e)=>{setMsg(e.target.value)}} placeholder='enter the text' cols="30" rows="10"></textarea>
        <input type="submit" onClick={submit} value='submit' />
        </form>
      </div>
    </>
  )
}

export default Login
