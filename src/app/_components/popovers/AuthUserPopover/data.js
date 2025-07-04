import { ASSET_AVATARS } from "@app/_utilities/constants/paths";
import { getAssetPath } from "@app/_utilities/helpers";
import { useAuth } from "@app/_components/_core/AuthProvider/hooks";

export const useAuthUser = () => {
  const { user } = useAuth();
  
  if (!user) {
    return {
      email: "",
      name: "Guest User",
      profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar10.jpg`, `60x60`),
      handle: "",
      job_title: "",
    };
  }

  return {
    email: user.email,
    name: `${user.firstName} ${user.lastName}`,
    profile_pic: user.profilePic ? getAssetPath(user.profilePic, `60x60`) : getAssetPath(`${ASSET_AVATARS}/avatar10.jpg`, `60x60`),
    handle: user.email,
    job_title: user.role === 'admin' ? 'Administrator' : 'User',
  };
};