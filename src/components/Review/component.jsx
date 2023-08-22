import { UserContainer } from "../User/container";

export const Review = ({ review, userId }) => {
  if (!review) {
    return null;
  }

  return <div>
      <UserContainer userId={userId}/>
      <div>{review.text}</div>
    </div>;
};
