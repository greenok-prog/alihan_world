import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    clickHandler: () => void;
  }

 const ItemButton: FC<ButtonProps> = ({clickHandler, children='', className='', ...rest}) => {

    return (
        <button
            className={`absolute w-12 h-12 bg-white cursor-pointer ${className}`}
            onClick={clickHandler}
            {...rest}
        
        >
            {children}
        </button>
    
    )
}
export default ItemButton