import React from 'react'

function addSuppliers() {
  return (
    <div>
      
    </div>
  )
}

export default addSuppliers



// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// const AddSupplier = () => {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open form dialog
//       </Button> */}
//       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//         <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
//         <DialogContent>

//           <DialogContentText>
//             Add Supplier
//           </DialogContentText>

//           <TextField
//             autoFocus
//             margin='dense'
//             id='name'
//             label='Name of Supplier'
//             fullWidth
//           />

//           <TextField
//             autoFocus
//             margin='dense'
//             id='address'
//             label=' Addres of Supplier'
//             fullWidth
//           />

//           <TextField
//             autoFocus
//             margin='dense'
//             id='contact'
//             label='Contact/ Phone/ Email'
//             fullWidth
//           />

//           <TextField
//             autoFocus
//             margin='dense'
//             id='More details'
//             label='More Details'
//             fullWidth
//           />



//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleClose} color="primary">
//             Add Suplier
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default AddSupplier;