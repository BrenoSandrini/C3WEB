import QRCode from 'react-qr-code';
import { useState } from 'react';
import QRCodelink from 'qrcode'
import './index.css';

function App() {
  const [link, setLink] = useState('')
  const [qrcodelink, setQrcodeLink] = useState('')

  function handleGerenate(link_url){
    QRCodelink.toDataURL(link_url,{width:600, margin:3,},function(err,url){setQrcodeLink(url)})
  }
  
  function handleQrcode(e){
    setLink(e.target.value);
    handleGerenate(e.target.value)
  }

  return (
    <div className='container'>

    <QRCode value={link}/>

      <input 
      className='input'
       placeholder='Digite o link'
       value={link}
       onChange={ (e) => handleQrcode(e)}
       />
    
    <a href={qrcodelink} download={`qrcode.png`}>Baixar QRCode</a>

    </div>
  );
}

export default App;
