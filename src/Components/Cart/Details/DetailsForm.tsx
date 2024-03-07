import React from 'react'
import { Currency } from '../../../Layout/app/Const';
import { Button, Divider, Flex, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const DetailsForm = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
      };
    
      const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
  return (
    <>
         <div>
                <p>Total : </p> <h6>6000 {Currency}</h6>
              </div>
         
    </>
  )
}

export default DetailsForm