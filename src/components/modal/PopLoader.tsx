import React, { FormEvent } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-evenly',
    margin: 'auto',
    // width: 'fix-content'
  }

}));




interface Props {
  onClose: () => void;
  onSubmit: () => void;
  open: boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: Props) => {
  const classes = useStyles();


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit();
    props.onClose();
  };

  return (
    <Dialog
      maxWidth='md'
      open={props.open}
      onClose={props.onClose}
      onKeyUp={(e) => {
        const ENTER = 13;

        if (e.keyCode === ENTER) {
          // props.onSubmit();
          // props.onClose();
        }
      }}
    >
      <form onSubmit={handleSubmit}
        className={classes.form}
      >
        <DialogContent>
          <DialogTitle id="form-dialog-title">Add Supplier</DialogTitle>
        </DialogContent>

        <TextField id='nameOfSupplier' label='Name of Supplier ' />
        <TextField id='addressOfSupplier' label='Address of Supplier' />
        <TextField id='contact' label='Contact/ Phone/ Email' />
        <TextField id='details' label='More Details' />

        <DialogActions>
          <Button type='button' color='primary' variant='outlined' size='medium'>
            Cancel
          </Button>
          <Button
            autoFocus
            type='submit'
            color='primary'
            variant='contained'
            size='small'
          >
            Submit
          </Button>
          <input type="submit" hidden />
        </DialogActions>
      </form>
    </Dialog>
  );
};