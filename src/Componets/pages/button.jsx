import {  ToastContainer } from 'react-toastify';

  const CloseButton = ({ closeToast }) => (
    <i
      className="material-icons"
      onClick={closeToast}
    >
    delete
    </i>
  );

export const Button = () => {

  return (
    <div>
      <ToastContainer closeButton={CloseButton} />
    </div>
  );
}

