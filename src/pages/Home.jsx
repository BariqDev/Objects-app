import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Container } from "@mui/material";
import PostsSliceView from "../feature/PostsSlice/PostSliceView";

const Home = () => {
  return (
    <Container maxWidth='xl' sx={{ mt: 2 }}>
      <NavBar />
      <PostsSliceView />
    </Container>
  );
};

export default Home;
