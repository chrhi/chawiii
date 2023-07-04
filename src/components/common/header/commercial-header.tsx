import { FC } from 'react'
import { UserNav } from '../tables/users-table/user-nav'

interface commercialheaderAbdullahProps {
  
}

const CommercialHeader: FC<commercialheaderAbdullahProps> = ({}) => {
  return <div className='w-full h-[70px]  bg-black '>
    <div className="flex justify-between items-center h-full  container ">
        <div className='h-full w-[200px]'>

        </div>
            <UserNav />
    </div>
  </div>
}

export default CommercialHeader