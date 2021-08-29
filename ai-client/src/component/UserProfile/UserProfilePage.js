import React, { useEffect } from "react";
import { UserProfileContent } from "./UserProfileContent";
import { UserProfile, UserProfileUpdateApi } from "../_Api/User";
import { connect, useDispatch, useSelector } from "react-redux";
import { PageSpinner } from "./PageSpinner";
import { toast } from "react-toastify";
import {
  userProfileGetAction,
  userProfileUpdateAction,
} from "../../redux/action/user";

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.userProfile);
  const user = useSelector((state) => state.user.user);

  const onGetUserProfile = async () => {
    await dispatch(userProfileGetAction());
  };
  const onUpdateUserProfile = async (data) => {
    console.log(data);
    await dispatch(userProfileUpdateAction(data, onGetUserProfile));
  };
  useEffect(() => {
    onGetUserProfile();
  }, []);
  return (
    <UserProfileContent
      profile={profile}
      onUpdateUserProfile={onUpdateUserProfile}
    />
  );
};

export { UserProfilePage };
