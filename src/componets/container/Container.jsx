import React from 'react'
import LinkButtons from '../buttons/LinkButtons'

const Container = () => {
  return (
     <div>
         <LinkButtons text="button1" value="1" background="red"/>
         <LinkButtons text="button2" value="2" name="blue"/>
     </div>
   
  )
}

export default Container