import React from "react";
import { useNavigate } from "react-router-dom";
import { loadState } from "../../config/storage";
import { useAdminProfile } from "../../hooks/admin/useAdminProfile";
import { Button } from "../../ui/button";
import { EditIcon } from "../../assets/svg/EditIcon";
import { Loading } from "../../components/loading";

export const Profile = () => {
  const navigate = useNavigate();
  const id = loadState("user")?.id;
  const { data: user, isLoading } = useAdminProfile(id);

  if (isLoading) return <Loading/>;

  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <div className="relative max-w-screen-sm w-full bg-white p-10 flex flex-col justify-center items-center gap-5 rounded-lg shadow-md shadow-primary">
        <div className="">
          <img
            src={user.img}
            alt="Admin Image"
            className="w-32 h-32 rounded-full border-2 border-primary shadow-md hover:shadow-primary hover:shadow-lg cursor-pointer hover:scale-110 transition-all"
          />
        </div>
        <div className="font-extrabold text-2xl">
          <h1>{user.name}</h1>
        </div>

        <div className="font-bold text-xl">
          <h3>{user.email}</h3>
        </div>

        <Button
          onClick={() => navigate(`/edit-profile/${id}`)}
          className="p-2 rounded absolute right-5 top-5 hover:shadow-md hover:shadow-primary"
          startIcon={<EditIcon/>}
          variant="special"
        />
      </div>
    </div>
    </>
  );
};
