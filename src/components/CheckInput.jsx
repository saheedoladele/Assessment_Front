

const CheckInput = ({checkName, checkType, checkLabe}) => {
  return (
    <div className="flex items-center">
                <input
                 
                  name={checkName}
                  type={checkType}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                 {checkLabe}
                </label>
              </div>
  )
}

export default CheckInput