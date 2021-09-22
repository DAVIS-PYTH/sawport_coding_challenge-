import { Alert } from "react-bootstrap";
import { RiAlarmWarningFill } from "react-icons/ri";

const Message = ({ variant, children }) => {
  return (
    <Alert className="font-weight-bold" variant={variant}>
      {variant === "danger" && <RiAlarmWarningFill className="mr-3" />}
      {children}
    </Alert>
  );
};

export default Message;
