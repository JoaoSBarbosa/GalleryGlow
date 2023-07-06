type Props = {
  img: string;
  closeModal: () => void;
};
export const Modal = ({ closeModal, img }: Props) => {
  return (
    <>
      <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90" onClick={closeModal}>
        <img
          src={`/assets/${img}`}
          alt=""
          className="max-w-screen max-h-screen"
        />
      </div>
      <div
        className="text-white fixed top-5 right-5 w-10 h-10 text-5xl cursor-pointer animate-pulse hover:animate-bounce hover:text-sky-400"
        onClick={closeModal}
      >
        X
      </div>
    </>
  );
};
