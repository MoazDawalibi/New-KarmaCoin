import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { FloatButton, Popover, Select, Tooltip } from 'antd'
import React, { useState } from 'react'
import ProductsFilter from './ProductsFilter';
import { useNavigate, useParams } from 'react-router-dom';
import WithDrawer from '../../HighOrderComponent/WithDrawer';
import { FiFilter } from "react-icons/fi";

const ProductsHeader = ({ style, setstyle, data }: any) => {
  const handleChange = (value: any) => {
    setShort((prevFilter: any) => ({ ...prevFilter, Shortby: value?.target.value }));

  };
  const navigate = useNavigate();
  const { category: paramCategory } = useParams();
  const [Short, setShort] = useState<any>({
    Shortby: paramCategory || 'jack'
  });


  const handleShortChange = (e: any) => {
  };
  return (
    <WithDrawer
      className="showfillter"
      title="ProductsFilter"
      button={
       <Tooltip title="Fillter">
         <FloatButton icon={<FiFilter />}/>
       </Tooltip>
      }
    >
      <ProductsFilter />


    </WithDrawer>
  )
}

export default ProductsHeader