import {  RingSpinnerOverlay} from 'react-spinner-overlay'

const LoaderOverlay = ({loading}) => {
  return (
    <>
   
    <RingSpinnerOverlay
    　　loading={loading} 
     overlayColor="rgba(0,0,0,0.2)"
     color='rgb(0, 107, 165)'
    />
  </>
  )
}

export default LoaderOverlay