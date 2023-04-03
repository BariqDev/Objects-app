import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { deepPurple } from "@mui/material/colors";
import { Button, CardMedia, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import { getPostsComments, getPostsDetails } from "./postSliceDetails";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const PostDetailsView = () => {
  const { loading, post, comments } = useSelector((state) => state.postDetails);

  const { postId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsDetails(postId));
    dispatch(getPostsComments(postId));
  }, [postId]);

  const getComments = () => {
    return comments.map((comment) => (
      <Card elevation={4} key={comment.id} sx={{ mb: 1 }}>
        <CardContent>
          <Stack direction='row' alignItems='center' spacing={2}>
            <Avatar
              sx={{ bgcolor: deepPurple[500] }}
              aria-label='recipe'
              {...stringAvatar(comment.name)}
            ></Avatar>
            <Stack direction='column'>
              <Typography variant='body1' color='text.primary'>
                {comment.name}
              </Typography>
              <Typography variant='caption' color='text.primary'>
                {comment.email}
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                {comment.body}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    ));
  };
  return (
    <>
      {!loading && (
        <Card sx={{ m: "auto", mt: 4, maxWidth: "70%" }}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {post.title}
            </Typography>

            <Typography variant='body1' color='text.secondary' mb={2}>
              {post.body}
            </Typography>
            <CardMedia
              sx={{ objectFit: "cover" }}
              component='img'
              height='500'
              image='https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
              alt='Paella dish'
            />
            <Divider />
          </CardContent>
          {comments.length > 0 && getComments()}
        </Card>
      )}
    </>
  );
};

export default PostDetailsView;
