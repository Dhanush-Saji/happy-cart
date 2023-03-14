import LottieBundler from './../LottieBundler/LottieBundler';

const SuccessLottie = () => {
  const configStyle={ width: 250, height: 250 }
  return (
    <div style={{display:'flex'}}>
      <LottieBundler configStyle={configStyle} purpose={'successcheckout'} />
    </div>
  )
}

export default SuccessLottie