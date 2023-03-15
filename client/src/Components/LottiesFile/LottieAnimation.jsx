import LottieBundler from '../LottieBundler/LottieBundler';

const LottieAnimation = () => {
  const configStyle ={}
  return (
    <div style={{display:'flex'}}>
      <LottieBundler configStyle={configStyle} purpose={'loading'} />
    </div>
  )
}

export default LottieAnimation