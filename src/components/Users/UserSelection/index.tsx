import React, { memo, ReactElement } from "react";
import { UserType, useUser } from "../../../contexts/UserContext";
import { Select } from "./style";

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

export default memo(UserSelection);
