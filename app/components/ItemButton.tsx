import Link from "next/link";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<any> {
    children: ReactNode;
    className?: string;
    clickHandler?: () => void;
    link?:string
  }

 const ItemButton: FC<ButtonProps> = ({clickHandler, children='', link, className='', ...rest}) => {

    return (
        <div>
            {link ? (
            <Link href={link} target="_blank"  className={`absolute w-12 h-12 bg-white cursor-pointer ${className}`} {...rest} rel="noopener noreferrer">
                {children}
            </Link>
        ) : (
            <button
            className={`absolute w-12 h-12 bg-white cursor-pointer ${className}`}
            onClick={clickHandler}
            {...rest}
        
        >
            {children}
        </button>
        )}
        </div>
    
    )
}
export default ItemButton