import { User } from "./component";
import { useGetUsersQuery } from "../../store/services/api";

export const UserContainer = ({ userId }) => {
  const {data: user} = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data:result.data?.find(({id}) => id === userId),
    }),
  });

  if (!user) {
    return null;
  }

  return <User user={user} />;
};
