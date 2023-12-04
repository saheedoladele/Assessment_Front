import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@apollo/client"
import ButtonComponent from "../components/ButtonComponent"
import InputBox from "../components/InputBox"
import TopHeader from "../components/TopHeader"
import { ADD_USER } from "../mutations/userMutation"

import { toast } from "react-hot-toast"
import LoaderOverlay from "../components/LoaderOverlay"
import { useRecoilState } from "recoil"
import { authAtom } from "../state/authAtom"


const Signup = () => {
  const [currentUser, setCurrentUser] = useRecoilState(authAtom)
  const [userData, setUserdata] =useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  })

  const navigate = useNavigate()
  const {firstName, lastName, email, password} = userData

  const [addUser, {loading}] = useMutation(ADD_USER, {
    variables : { firstName, lastName, email, password}
  })

 
    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        if(firstName === "" || lastName ===""|| email ===""|| password === ""){
          toast.error("Please fill all the required")
          return
        }
    
        try {
          const result = await addUser(firstName, lastName, email, password)
  
          
          if (result.data){
            setCurrentUser(result.data.addUser);
       
            navigate('/dashboard')
          }
        } catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
          toast.error(message)
        }
      
         
    }

    const handleChange = (e) =>{
      setUserdata({...userData, [e.target.name]: e.target.value})
    }
  return (
   <>
   <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
     <TopHeader pageLabel={`Create your free account`} />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form className="space-y-6" action="#" method="POST">
           <InputBox inputLabel={`First Name`}
                     inputName={`firstName`}
                     inputType={`text`}
                     onchangeFn={handleChange}
                     value={userData.firstName}
                      />

            <InputBox inputLabel={`Last Name`}
                     inputName={`lastName`}
                     inputType={`text`}
                     onchangeFn={handleChange}
                     value={userData.lastName}
                      />

            <InputBox inputLabel={`Email Address`}
                     inputName={`email`}
                     inputType={`email`}
                     onchangeFn={handleChange}
                     value={userData.email}
                      />

            <InputBox inputLabel={`Password`}
                     inputName={`password`}
                     inputType={`password`}
                     onchangeFn={handleChange}
                     value={userData.password}
                      />
            <div>
              

              <ButtonComponent btnType={`submit`} 
                              label={loading ? <LoaderOverlay loading={loading} /> : 'SignUp'}
                              clickFn={handleSubmit} />
            </div>
          </form>



        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login
          </a>
        </p>
      </div>
    </div>
   </>
  )
}

export default Signup