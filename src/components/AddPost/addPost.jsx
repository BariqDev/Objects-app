import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { submitPost } from "../../feature/PostsSlice/postSlice";

export default function AddPost({ handleClose, open }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(submitPost({ ...data, userId: 1 }));
    handleClose();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add Post</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='title'
              label='Post title'
              type='text'
              fullWidth
              variant='standard'
              name='title'
              {...register("title", {
                required: {
                  value: true,
                  message: "this filed is required",
                },
              })}
              error={Boolean(errors.title)}
              helperText={errors.title && errors.title.message}
            />
            <TextField
              id='body'
              label='body'
              fullWidth
              variant='standard'
              multiline
              name='body'
              {...register("body", {
                required: {
                  value: true,
                  message: "this filed is required",
                },
              })}
              error={Boolean(errors.body)}
              helperText={errors.body && errors.body.message}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit'>submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
