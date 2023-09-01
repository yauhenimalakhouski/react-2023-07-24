import { UserContainer } from "../User/container";
import { Button } from "../Button/component";
import { useState } from "react";
import { NewReviewForm } from "../NewReviewForm/component";

export const Review = ({ review }) => {
  const [isEdit, setIsEdit] = useState(false);
  if (!review) {
    return null;
  }

  return (
    <div>
      {
      (isEdit)?
      <div>
        <NewReviewForm 
        onSaveForm={(review) => updateReview({review, restaurantId})}
        formState = {{name:review.name, text: review.text, rating:review.rating}}
        />
        <Button onClick={() => setIsEdit(false)}>Cancel</Button>
      </div>
      :<div>
        <UserContainer userId={review.userId} />
        <div>{review.text}</div>
        <div>{review.rating}</div>
      </div>
      }
      <Button onClick={() => setIsEdit(true)}>Edit</Button>
    </div>
  );
};
