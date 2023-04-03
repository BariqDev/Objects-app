import React, { useEffect, useState } from "react";
import { CardHeader, CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deepPurple } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./postSlice";

const PostSliceView = () => {
  const [post, setPost] = useState([]);
  const { posts, loading } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      {!loading && (
        <Grid container spacing={3} mt={8}>
          {posts.map((post) => {
            return (
              <Grid item xs={12} md={4} lg={3} key={post.id}>
                <Card sx={{ minWidth: 275, height: 420 }} elevation={3}>
                  <CardHeader
                    title={
                      post.title.length > 29
                        ? `${post.title.substr(0, 22)} ...`
                        : post.title
                    }
                  />
                  <CardMedia
                    component='img'
                    height='194'
                    image='https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                    alt='Paella dish'
                  />
                  <CardContent sx={{ height: 80 }}>
                    <Typography variant='body2' color='text.secondary'>
                      {post.body.length > 150
                        ? `${post.body.substr(0, 147)} ...`
                        : post.body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <NavLink
                      to={`/post/${post.id}`}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontWeight: "bold",
                      }}
                    >
                      <Button
                        size='small'
                        sx={{
                          color: deepPurple[500],
                          fontWeight: 500,
                        }}
                      >
                        VIEW POST
                      </Button>
                    </NavLink>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default PostSliceView;
