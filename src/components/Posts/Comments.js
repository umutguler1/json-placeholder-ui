import { useEffect, useState } from "react";

import axios from "axios";
import CommentItem from "./CommentItem";

const Comments = ({ postId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
    async function fetchComments() {
      setIsLoading(true);

      const response = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/comments",
      });
      setComments(response.data);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (comments.length === 0) {
    return;
  }

  const postComments = comments.filter((comment) => comment.postId == postId);

  return (
    <div className="grid gap-y-2 bg-custom-blue text-custom-white border-t-8 border-custom-orange -mx-2 p-4">
      <h3 className="font-bold bg-custom-white drop-shadow-lg text-custom-blue py-4 pr-4 pl-2 w-fit mt-2 -ml-4 rounded-r-full">
        Comments
      </h3>
      {postComments.map((comment) => (
        <CommentItem
          key={comment.id}
          title={comment.name}
          senderEmail={comment.email}
          body={comment.body}
        />
      ))}
    </div>
  );
};

export default Comments;
