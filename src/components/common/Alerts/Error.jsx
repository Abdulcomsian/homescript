import { IoIosClose } from "react-icons/io";

export default function Error({ children }) {
  return (
    <div className="error-container">
      {children}
      <IoIosClose className="closeIcon" />
    </div>
  );
}
