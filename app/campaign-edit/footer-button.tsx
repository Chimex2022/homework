import React from 'react'
import Button from '../../components/common/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const FooterButton = () => {
  return (
    <div className='flex justify-between my-8 px-6 items-center w-full'>

        <div>

        <Button
        text='Back'
        variant='secondary'
        icon={ArrowLeft}
        onClick={() => alert('Back clicked')}
        
        />
        </div>

        <div>

        <Button
         text='Continue'
         variant='primary'
         onClick={() => alert('Continue clicked')}
         icon={ArrowRight}
         iconPosition='end'
        
        
        />
        </div>
      
    </div>
  )
}

export default FooterButton
