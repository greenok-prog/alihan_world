import { FC } from "react";

type Props = {
  imgSrc: string;
  closeModal: () => void;
};

const ImgModal: FC<Props> = ({ imgSrc, closeModal }) => {
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
    >
      <div
        className="max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imgSrc}
          alt=""
          className="h-auto w-auto max-h-[90vh] max-w-[90vw] object-contain"
        />
      </div>
    </div>
  );
};

export default ImgModal;
