import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ButtonComponent from "../components/ButtonComponent"
import CheckInput from "../components/CheckInput"
import InputBox from "../components/InputBox"
import TopHeader from "../components/TopHeader"
import { LOGIN_USER } from "../mutations/userMutation"
import { useMutation } from "@apollo/client"
import { toast } from "react-hot-toast"
import LoaderOverlay from "../components/LoaderOverlay"
import { useRecoilState } from "recoil"
import { authAtom } from "../state/authAtom"


const Login = () => {

  const [currentUser, setCurrentUser] = useRecoilState(authAtom)

  const [authData, setAuthdata] = useState({
    email:'',
    password:''
  })

  const { email, password} = authData
  const navigate = useNavigate()

  const handleChange = (e) =>{
    setAuthdata({...authData, [e.target.name]: e.target.value})
  }

  const [LoginUser, {loading, data}] = useMutation(LOGIN_USER, {
    variables : {email, password}
  })
  
    const handleClick = async(e)=>{
      e.preventDefault()
     
      if(email === "" || password === ""){
  
        toast.error("Please fill all the required")
        return
      }

      try {
        const result = await LoginUser(email, password)

       
        if (result.data){
          setCurrentUser(result.data.LoginUser.user);
          // console.log(result.data.LoginUser.user);
          navigate('/dashboard')
        }
      } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        toast.error(message)
      }

    }

   

 
 

  return (
    <>
   
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
     <TopHeader pageLabel={`Sign in to your account`} />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form className="space-y-6" action="#" method="POST">
           <InputBox inputLabel={`Email Address`}
                     inputName={`email`}
                     inputType={`email`}
                     onchangeFn={handleChange}
                     value={authData.email}
                      />

          <InputBox inputLabel={`Password`}
                     inputName={`password`}
                     inputType={`password`}
                     onchangeFn={handleChange}
                     value={authData.password}
                      />

            <div className="flex items-center justify-between">
             

              <CheckInput checkName={`rememberMe`}
                            checkLabe={`Remeber me`}
                            checkType={`checkbox`} />

              <div className="text-sm leading-6">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              

              <ButtonComponent btnType={`submit`} 
                              label={loading ? <LoaderOverlay loading={loading} /> : 'Login'}
                              clickFn={handleClick} />
                              
            </div>
          </form>



        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          You do not have an account?{' '}
          <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Create one
          </a>
        </p>
      </div>
    </div>
  </>
  )
}

export default Login