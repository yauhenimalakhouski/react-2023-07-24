import { UserContainer } from "../User/container";
import { Button } from "../Button/component";
import { useState } from "react";
import { NewReviewForm } from "../NewReviewForm/component";
import { useEditReviewMutation } from "../../store/services/api";

export const Review = ({ review }) => {
  const [editReview, {isLoading}] = useEditReviewMutation();
  const [isEdit, setIsEdit] = useState(false);
  if (!review) {
    return null;
  }
  if(isLoading){
    return <span>Saving...</span>
  }
  const reviewId = review.id;
  return (
    <div>
      {
      (isEdit)?
      <div>
        <NewReviewForm 
        onSaveForm={(review) => {
          editReview({reviewId, review});
          setIsEdit(false);
        }}
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
