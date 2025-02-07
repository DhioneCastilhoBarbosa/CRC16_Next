import React, { useState } from 'react'
import NewMenu from './components/menu';



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
        <div className='flex flex-row items-center justify-between pl-2 pr-1 md:py-2 md:px-4'>
          <p className='flex flex-row items-center justify-center text-white font-bold text-xl'> Convert</p>

         <NewMenu/>

        </div>
      </header>

      <div className='flex flex-col  bg-violet-500 px-24 pb-24 pt-4 rounded-2xl shadow-2xl shadow-gray-600 items-center w-3/4 md:w-auto'>
        <p className='mt-4 font-bold text-sm md:text-xl text-white whitespace-nowrap'>Insira o código</p>
        <p className='mb-16 font-bold text-sm md:text-xl text-white whitespace-nowrap'>decimal para converter para hexdecimal</p>
        <div className='flex flex-row items-center justify-center flex-wrap md:flex-nowrap gap-4'>
          <input className='w-64 md:w-72  p-1 rounded-lg text-center border-2 border-violet-400 focus:outline-none' type="text"  onChange={handleChange}/>
          <button className=' w-60 md:w-auto px-4 py-1 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-800 duration-700' onClick={decimalToHex} >Enviar</button>
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