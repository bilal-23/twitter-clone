import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './dialog.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ alertText, closeModal }) {

    return (
        <div>
            <Dialog
                className="dialog"
                open={true}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Something Went Wrong !"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {alertText} Try again later.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button class="dialog__button" onClick={() => closeModal(false)}>
                        OK
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
