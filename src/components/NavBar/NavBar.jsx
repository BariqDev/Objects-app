import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import AddPost from "../AddPost/addPost";

const NavBar = () => {
  const [openAddPost, setOpenAddPost] = useState(false);

  return (
    <>
      <AppBar position='absolute'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Objects
          </Typography>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Social app
          </Typography>
          <Button color='inherit' onClick={() => setOpenAddPost(true)}>
            Add post
          </Button>
        </Toolbar>
      </AppBar>
      <AddPost open={openAddPost} handleClose={() => setOpenAddPost(false)} />
    </>
  );
};

export default NavBar;
