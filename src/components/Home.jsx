import { CardContent, Typography, Card, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const makeCard = (row, index) => {
    const card = (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            User ID: {row.userId}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Blog ID: {row.id}
          </Typography>
          <Typography variant="body2">
            <b>{row.title}</b>
            <br />
            {row.body}
          </Typography>
        </CardContent>
      </React.Fragment>
    );

    return (
      <Box sx={{ minWidth: 275 }} key={index}>
        <Card variant="outlined">{card}</Card>
      </Box>
    );
  };

  var [value, setValue] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setValue(response.data);
    });
  });

  return <div id="card">{value.map((row, index) => makeCard(row, index))}</div>;
};

export default Home;
