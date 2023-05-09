import "./AddBlog.css";
import { Button, TextField, Typography } from "@mui/material";
import React from "react";

const AddBlog = () => {
  return (
    <div id="addBlog">
      <Typography variant="h3">ADD BLOG</Typography>
      <br />
      <br />
      <br />
      <TextField id="outlined-basic" label="Blog Name" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="Author Name" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="Title" variant="outlined" />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Description"
        multiline
        variant="outlined"
      />
      <br />
      <br />
      <br />
      <br />
      <Button variant="contained">Submit</Button>
    </div>
  );
};

export default AddBlog;
