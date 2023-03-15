
import LottieBundler from '../LottieBundler/LottieBundler';

const NotFound = () => {
  const configStyle={ width: 450, height: 450 }
  return (
    <div style={{display:'flex'}}>
      <LottieBundler configStyle={configStyle} purpose={'notfound'} />
    </div>
  )
}

export default NotFound