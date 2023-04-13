import React,{useState} from 'react'
import { Inter } from 'next/font/google'
import {crc16} from 'easy-crc'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
const [codigo,setCodigo] = useState('')
const [valor,setValor] = useState('');

const handleChange = (event: any)=>{
  
  setValor((event.target.value).toUpperCase());
  
}

const handleClick = ()=>
{
  console.log (valor)
  let checksum = ((crc16('MODBUS',valor)).toString(16).padStart(4,'0')).toUpperCase()
  valor=="" ? setCodigo(""): setCodigo(checksum);
  //console.log(checksum );
  
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <header className='w-full  bg-blue-700'>
        <div className='flex flex-row items-center justify-between px-4 py-2'>
          <p className='text-white font-bold text-xl'>Convert</p>
          <button className='text-white'></button>
        </div>
      </header>

      <div className='flex flex-col  bg-blue-400 px-24 pb-24 pt-4 rounded-2xl shadow-2xl shadow-gray-600 items-center'>
        <p className='mb-16 mt-4 font-bold text-xl text-white'>Insira o código para conversão</p>
        <div>
         <input className='w-72 p-1 rounded-lg text-center border-2 border-blue-400 focus:outline-none'  type="text" onChange={handleChange} />
         <button className=' ml-2  px-4 py-1 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-800' onClick={handleClick}>Enviar</button>
        </div>

          <p className=' mt-8 font-bold text-xl text-white' >{valor==='FFFF' ? "": codigo }</p>

      </div>
    
    <footer className='w-full  bg-indigo-50'>
      <div className=' flex items-center justify-center'>
        <p className=' text-sm text-gray-400'>
          <a href="https://www.dhionecastilho.com.br/">
          © Dhione Castilho 2023 - Todos os direitos reservados
          </a>
        </p>
      </div>
    </footer>
    </main>

  
  )
}
