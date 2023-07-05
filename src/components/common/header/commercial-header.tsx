import { FC } from 'react'

import Image from 'next/image'
import logo from "@/assets/lgog.png"
import { Button } from '@/components/ui/button'


interface commercialheaderAbdullahProps {
  
}

const CommercialHeader: FC<commercialheaderAbdullahProps> = ({}) => {
  return <div className='w-full h-[70px]  bg-black '>
    <div className="flex justify-between items-center h-full  container ">
        <div className='h-full flex items-center justify-start w-[600px]'>
          <div className='w-[20%] flex items-center justify-start gap-x-2'>
            <Image
              src={logo}
              width={30} 
              height={30}
              alt='logo'
            />
            <h3 className='text-white text-xl mr-1 font-semibold'>Shawii</h3>
          </div>
          <Button variant="ghost" className='text-white w-fit flex'>
            Les Raport
          </Button>
          <Button variant="ghost" className='text-white w-fit flex ' >
            Les Dommand
          </Button>

        </div>
        
    </div>
  </div>
}

export default CommercialHeader