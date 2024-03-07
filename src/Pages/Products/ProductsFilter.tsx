import { Divider, InputNumber, Radio, Select, Space } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import type { RadioChangeEvent } from 'antd';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useGetAllCategories } from '../../api/categories';
import { useTranslation } from 'react-i18next';

interface FilterState {
  category_id: string;
  min_price: number;
  max_price: number;
  all: boolean;
  is_most_purchased: boolean;
  is_highlight: boolean;
}



const ProductsFilter = () => {
  const navigate = useNavigate();
  const { category_id: paramCategory_id, min_price: paramMin_price, max_price: paramMax_price, all: paramall,is_most_purchased:paramis_most_purchased, is_highlight:paramis_highlight} = useParams();
  const [search] = useSearchParams()
  const [t] = useTranslation()
  const [filter, setFilter] = useState<FilterState>({
  category_id: paramCategory_id || 'all',
  min_price: paramMin_price ? parseInt(paramMin_price, 10) : 0,
  max_price: paramMax_price ? parseInt(paramMax_price, 10) : 1000000,
  all: true,
  is_most_purchased:  false,
  is_highlight:  false,
});

const { data } = useGetAllCategories();
const CategoriesArry = data?.data?.data?.map((item: any) => ({
  value: item?.id,
  label: item?.category_translations[0]?.name,
}));

CategoriesArry?.push({ value: 'all', label: 'all' });

useEffect(() => {
  
  if (!isInitialRender.current) {
    const queryParams = {
      category_id: filter.category_id  ? (filter.category_id  == 'all'  ? undefined : filter.category_id) : undefined,
      min_price: filter.min_price !== 0 ? filter.min_price : undefined,
      max_price: filter.max_price !== 1000000 ? filter.max_price : undefined,
      is_most_purchased: filter.is_most_purchased ? filter.is_most_purchased : undefined,
      is_highlight: filter.is_highlight ? filter.is_highlight : undefined,
      search:search.get('search') ? search.get('search') : undefined
    };
    // console.log(queryParams);
    

    const queryString = Object.entries(queryParams)
      .filter(([key, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    navigate(`/Products${queryString ? `?${queryString}` : ''}`);
  } else {
    isInitialRender.current = false;
  }
}, [filter, navigate]);
  // ...
  
  const isInitialRender = useRef<any>(true);
  
  
  const handleChange = (value: any, option: any | Array<any>) => {
    console.log(option);
    
    setFilter((prevFilter) => ({ ...prevFilter, category_id: option?.value }));
  };
  
  const onChangeInput = (min: number, max: number) => {
    setFilter((prevFilter) => ({ ...prevFilter, min_price: min, max_price: max }));
  };

  const handleAllChange = (e: RadioChangeEvent) => {
    setFilter((prevFilter) => ({ ...prevFilter, all: true ,is_highlight:false ,is_most_purchased:false }));
  };

  const handleis_most_purchasedChange = (e: RadioChangeEvent) => {
    setFilter((prevFilter) => ({ ...prevFilter, all: false ,is_highlight:false ,is_most_purchased:true }));
  };
  const handleis_highlightChange = (e: RadioChangeEvent) => {
    setFilter((prevFilter) => ({ ...prevFilter, all: false ,is_highlight:true ,is_most_purchased:false }));
  };
  return (
    <div className='ProductsFilter'>
      <span className='ProductsFilter_header'>{t("ProductsFilter")} </span>
      <Divider />
      <div className='ProductsFilter_Text'> {t("Categories")} </div>

      <div>
        <Select
          value={filter.category_id}
          style={{ width: '100%' }}
          onChange={handleChange}
          options={CategoriesArry}
        />
      </div>
      <div className='ProductsFilter_Text'>{t("Price Range")}</div>
      <div>
        <InputNumber
          min={0}
          max={1000000}
          defaultValue={filter.min_price}
          onChange={(value) => onChangeInput(value as number, filter.max_price)}
        />
        {' > '}
        <InputNumber
          min={0}
          max={1000000}
          defaultValue={filter.max_price}
          onChange={(value) => onChangeInput(filter.min_price, value as number)}
        />
      </div>
      <Divider />

      <Space direction='vertical'>
        <Radio
          value='all'
          checked={filter.all === true}
          className='ProductsFilter_options'
          onChange={handleAllChange}
        >
          {t("All")}
        </Radio>
        <Radio
          value='highlight'
          checked={filter.is_highlight === true}
          className='ProductsFilter_options'
          onChange={handleis_highlightChange}
        >
          {t("Highlight")}
          
        </Radio>
        <Radio
          value='mostPurchased'
          checked={filter.is_most_purchased === true}
          className='ProductsFilter_options'
          onChange={handleis_most_purchasedChange}
        >
          {t("Most Purchased")}
        </Radio>
        {/* <Radio
          value='favourite'
          checked={filter.is_favourite === true}
          className='ProductsFilter_options'
          onChange={handleis_favouriteChange}
        >
          {t("Favourite")}
        </Radio> */}
      </Space>
      <div></div>
    </div>
  );
};

export default ProductsFilter;
