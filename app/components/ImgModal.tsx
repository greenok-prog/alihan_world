import { FC } from "react";

type Props = {
    imgSrc: string,
    closeModal: () => void
}
const ImgModal:FC<Props>= ({imgSrc, closeModal}) => {
    return (
        <div
      onClick={closeModal}
      className="absolute top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black/75"
    >
      <div className="h-[600px] w-full">
        <img
          src={imgSrc}
          className="h-full w-full object-contain"
          alt=""
        />
      </div>
    </div>
    )
}
export default ImgModal;