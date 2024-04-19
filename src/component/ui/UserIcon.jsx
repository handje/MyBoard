import styled from "styled-components";
import { VscAccount } from "react-icons/vsc";

const UserIcon = (props) => {
  return (
    <StyledUserIcon className="button" onClick={() => {}}></StyledUserIcon>
  );
};

const StyledUserIcon = styled(VscAccount)`
  font-size: 30px;
  color: grey;
  margin-right: 5px;
  cursor: pointer;
`;

export default UserIcon;
