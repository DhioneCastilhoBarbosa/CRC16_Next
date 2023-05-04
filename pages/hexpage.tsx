import React, { useState } from 'react'
import Link from 'next/link'

export default function HexConvert() {
  const[Hex,setHex] = useState('')
  const [valor, setValor] = useState('');

  const handleChange = (event: any) => {

    setValor((event.target.value).toUpperCase());
    
  }

  const decimalToHex =()=> {
    let padding =0;
    
    let hex = Number(valor).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
      hex = "0" + hex;
    }

    let tamanho = 2;
    let palavras = [];
    for (let i = 0; i < hex.length; i += tamanho) {
      palavras.push(hex.slice(i, i + tamanho));
    }

    setHex( palavras.reverse().join('').toUpperCase());

  }

  return(
   
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <header className='w-full  bg-blue-700'>
        <div className='flex flex-row items-center justify-between px-4 py-2'>
          <p className='text-white font-bold text-xl'>Convert</p>

          <div className='flex flex-row items-center justify-between ml-2 px-2 text-white '>
            <Link className='mr-6  hover:text-cyan-300 duration-700' href="/">
              Decodificar
            </Link>
            <Link  className='hover:text-cyan-300 duration-700' href="/hexpage">
              Converter
            </Link>
          </div>
        </div>
      </header>

      <div className='flex flex-col  bg-violet-500 px-24 pb-24 pt-4 rounded-2xl shadow-2xl shadow-gray-600 items-center'>
        <p className='mb-16 mt-4 font-bold text-xl text-white'>Insira o código decimal para converter para hexdecimal</p>
        <div>
          <input className='w-72 p-1 rounded-lg text-center border-2 border-violet-400 focus:outline-none' type="text"  onChange={handleChange}/>
          <button className=' ml-2  px-4 py-1 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-800 duration-700' onClick={decimalToHex} >Enviar</button>
        </div>

        <p className=' mt-8 font-bold text-xl text-white' >{Hex === "0"? "" : Hex}</p>

      </div>

      <footer className='w-full  bg-indigo-50'>
        <div className=' flex items-center justify-center'>
          <p className=' text-sm text-gray-600'>
            <a href="https://www.dhionecastilho.com.br/">
              © Dhione Castilho 2023 - Todos os direitos reservados
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
  
}