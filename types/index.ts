import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: String; 
    containerStyles: String; 
    handleOnClick?: MouseEventHandler<HTMLButtonElement>; 
    btnType?: 'button' | 'submit'; 
}