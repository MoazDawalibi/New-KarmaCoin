import React, { useState, ReactNode, useEffect } from 'react';
import type { DrawerProps } from 'antd';
import {  Drawer, Space } from 'antd';

interface WithDrawerProps {
  button: React.ReactNode;
  children: ReactNode;
  title:any;
  className?:string
  isopen?:boolean
  setisopen?:any
}


const WithDrawer: React.FC<WithDrawerProps> = ({ button, children,title ="Basic Drawer",className , isopen,setisopen }) => {
  const [open, setOpen] = useState( false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('top');
    useEffect(() => {
      if(isopen === false){
        setOpen(false)

      }

    }, [isopen])
    
    useEffect(() => {
      setisopen(open)
    }, [open])
    

  return (
    <>
      <Space>
        {React.cloneElement(button as React.ReactElement, {
          onClick: () => setOpen(true),
        })}
      </Space>
      <Drawer
      className='drawer'
        title={title}
        placement={placement}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={placement}
      >
        <div className={className}>
        {children}

        </div>
      </Drawer>
    </>
  );
};

export default WithDrawer;


//   <WithDrawer
//   button={<Button type="primary">Open</Button>}
// >
//   {/* Your content goes here */}
// </WithDrawer>