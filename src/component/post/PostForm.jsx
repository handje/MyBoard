import React from "react";
import { Form, Input, MutiLineInput, Button } from "../common";

const PostForm = (props) => {
  const {
    onSubmit,
    title,
    handleChangeTitle,
    content,
    handleChangeContent,
    buttonTitle,
  } = props;
  return (
    <Form onSubmit={onSubmit}>
      <Input value={title} onChange={handleChangeTitle} />
      <MutiLineInput
        height={480}
        value={content}
        onChange={handleChangeContent}
      />
      <Button title={buttonTitle} />
    </Form>
  );
};

export default PostForm;
