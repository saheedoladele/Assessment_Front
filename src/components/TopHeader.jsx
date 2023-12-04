

import logo from '../assets/logo.png'
const TopHeader = ({pageLabel}) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <img
      className="mx-auto h-20 w-auto"
      src={logo}
      alt="Your Company"
    />
    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      {pageLabel}
    </h2>
  </div>
  )
}

export default TopHeader