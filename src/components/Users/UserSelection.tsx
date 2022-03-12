import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import { UserType, useUser } from "../../contexts/UserContext";

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  font-size: 14px;
  border-radius: 6px;
`;

const UserSelection = (): ReactElement => {
  const { user, setUser } = useUser();

  const users = [UserType.Joyse, UserType.Sam, UserType.Russell];

  return (
    <div className="user-selection">
      <p>1. Choose your user</p>
      <div>
        <Select
          name="user"
          id="user"
          onChange={(event) => setUser(event.target.value as UserType)}
          defaultValue={user}
        >
          {users.map((targetUser) => {
            return (
              <option key={targetUser} value={targetUser}>
                {targetUser}
              </option>
            );
          })}
        </Select>
      </div>
    </div>
  );
};

export default UserSelection;
