import styled from '@emotion/styled';
import React, {ReactElement} from 'react';

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  font-size: 14px;
  border-radius: 6px;
`;

const UserSelection = () : ReactElement => {
  return (
    <div className="user-selection">
      <p>1. Choose your user</p>
      <div>
        <Select>
          <option>Joyse</option>
          <option>Sam</option>
          <option>Russell</option>
        </Select>
        </div>
    </div>
  )
}

export default UserSelection;