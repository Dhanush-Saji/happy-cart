import Lottie from 'lottie-react';
import not from '../../assets/not404.json'
import success from '../../assets/success.json';
import loader from '../../assets/loader.json'

const LottieBundler = ({configStyle,purpose}) => {
  return (
    <>
    {
        purpose === 'notfound'?<Lottie animationData={not} loop={true} style={configStyle} />:purpose === 'successcheckout'?<Lottie animationData={success} loop={true} style={configStyle} />:purpose === 'loading'?(<>
        <Lottie animationData={loader} loop={true} style={configStyle} />
        <Lottie animationData={loader} loop={true} style={configStyle} />
        </>):null
    }
    
    </>
  )
}

export default LottieBundler