import * as Input from '@/Components/Input';
import { SettingTabs } from '@/Components/SettingTabs';
import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <>
       <h1 className="text-zinc-50 text-3xl font-medium">Usuários</h1>

       <SettingTabs/>

       <div className='mt-6 flex flex-col'>
          <div className='flex justify-between items-center border-b border-zinc-50 pb-5'>
            <div>
              <h1 className='text-lg text-zinc-50 font-medium '>Informações pessoais</h1>
              <h3 className='text-sm text-zinc-300'>Atualize a sua foto e as suas informações pessoais aqui.</h3>
            </div>
            <div className='flex gap-2'>
                <button 
                  className='rounded-lg px-4 py-2 
                            text-sm font-semibold shadow-sm 
                            border border-zinc-300  hover:bg-zinc-700 
                            text-white'
                  type='button'>
                            Cancelar
                </button>
                <button className='rounded-lg px-4 py-2 
                                    text-sm font-semibold shadow-sm 
                                    bg-violet-600 text-white hover:bg-violet-700'
                        type='submit' 
                        form='formUser'>
                            Confirmar
                </button>
            </div>
          </div>

          <form id='formUser' className='flex flex-col mt-6 w-full gap-5 divide-y divide-zinc-50'>
            <div className='grid grid-cols-form gap-3'>
              <label htmlFor="firstName" className='text-zinc-50 font-sm font-medium'>Nome</label>
              <div className='flex gap-3'>
                <Input.Root>
                  <Input.Controll id='firstName' defaultValue={'Pedro'}/>
                </Input.Root>
                <Input.Root>
                  <Input.Controll id='lastName' defaultValue={'Gonzales'}/>
                </Input.Root>
                </div>
            </div>

            <div className='grid grid-cols-form gap-3 py-5'>
              <label htmlFor="email" className='text-zinc-50 font-sm font-medium'>E-mail</label>
                <Input.Root>
                  <Input.Prefix>
                    <Mail className='text-zinc-50'/>
                  </Input.Prefix>
                  <Input.Controll id='email' defaultValue={'pedro.gonzales@learngub.com'}/>
                </Input.Root>
            </div>
          </form>
       </div>
    </>
  )
}
