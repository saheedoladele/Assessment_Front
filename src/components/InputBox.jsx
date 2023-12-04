

const InputBox = ({ inputLabel, inputName, inputType, onchangeFn, value}) => {
  return (
    <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {inputLabel}
              </label>
              <div className="mt-2">
                <input
                  name={inputName}
                  type={inputType}
                  onChange={onchangeFn}
                  placeholder={inputLabel}
                  required
                  value={value}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  )
}

export default InputBox