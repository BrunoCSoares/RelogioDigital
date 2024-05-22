import React, { useState, useEffect } from 'react'; 
import './RelogioDigital.css'
  
function RelogioDigital() { 
  const [hora, setHora] = useState(new Date().toLocaleTimeString()); 
  
  useEffect(() => { 
    const interval = setInterval(() => { 
      setHora(new Date().toLocaleTimeString()); 
    }, 1000); 
  
    return () => clearInterval(interval); 
  }, []); 
  
  return ( 
    <div className="estrutura">
      <h2>Relógio Digital</h2> 
      <div className='visor'> 
        <p>{hora}</p> 
      </div> 
    </div>
  ); 
} 
  
export default RelogioDigital; 