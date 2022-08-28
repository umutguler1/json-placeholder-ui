const CommentItem = ({ title, senderEmail, body }) => {
  return (
    <div className="grid gap-y-4 my-4 border-b-2 -mx-2 border-custom-yellow pb-4">
      <h4 className="font-semibold">{title}</h4>
      <p className="underline text-sm">By: {senderEmail}</p>
      <p className="px-2">{body}</p>
    </div>
  );
};

export default CommentItem;
