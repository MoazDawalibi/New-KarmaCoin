import { ReactNode } from "react";

export type Tchildren = {
  children : ReactNode
}

export  interface FormTableState {
    objectToEdit: any[]; 
    OpenEdit: boolean;
    OpenAdd: boolean;
  }

  export type KarimFieldProps = {
    name: string;
    name2?: string;
    type: string;
    placeholder?: string;
    label?: string;
    className?: string;
    option?: any;
    isMulti?: boolean;
    Disabled?: boolean;
    group ? : boolean
  };

  export interface MenuItem {
    key: string;
    label: string;
    icon?: React.ReactNode;
    children?: MenuItem[];
  }

  export type TProduct= {
    id : number
    name:string,
    img:string;
    price:number,
    brand :string,
    description:string,
    count:number



  }
  export type TCardProduct = {
    
    title : string;
     href:string;
      data : TProduct[] ;
       count: number;
       icon:any
  }
  
  export type TSubTitle = {
    title : string;
     href:string;
       count: number;
       icon:any
  }
 

  export type TBigAdsData = {
          header : string,
            img : string ,
            mainText:string,
            textPrice:string,
            Price:string,
            color:string
    }

    export type TbannerData = {
   imageUrl: string;
    title: string;
    subtitle: string;
    discount: string;
    link: string;
    btn: string
}


 export type THeroAd = {
  imageUrl: string;
  title: string;
  subtitle: string;
  discount: string;
  link: string;
  btn:string ;
}


export type TSpecialProperty = {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export type TMovesAdsData={ LeftText:string;RightText:string; Link:string; }
