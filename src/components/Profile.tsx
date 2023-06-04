import { FC, useContext } from "react";
import { UserMetrics } from "./UserMetrics";
import { PostsComponent } from "./PostsComponent";
import { User } from "../types/User";
import { Outlet, useParams } from "react-router-dom";
import { OtherUsersContext } from "../contexts/OtherUsersContext";
import { Box } from "@mui/material";

export const Profile: FC = () => {
  const otherUsers = useContext(OtherUsersContext);
  const { userID } = useParams();
  const user: User =
    typeof userID === "string"
      ? otherUsers.find((user) => user.id === parseInt(userID))
      : ({} as User);

  return (
    <>
      {user !== undefined && (
        <Box className="profile-section">
          <UserMetrics user={user} />
          <PostsComponent user={user} />
          <Outlet />
        </Box>
      )}
    </>
  );
};
