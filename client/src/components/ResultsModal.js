import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export const ResultsModal = ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const definedWordsFrequency = data.definedWords.length;
  const undefinedWordsFrequency = data.undefinedWords.length;

  const handleClose = () => {
    setOpen(false);

    window.location.reload();
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      setOpen(false);

      window.location.reload();
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        onHide={handleClose}
        onExit={handleClose}
        onKeyDown={handleKeyDown}
        OnKeyUp={handleKeyDown}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {definedWordsFrequency === 0 ? null : (
              <h2 className={classes.wordList}>
                {definedWordsFrequency} Real Word/s
              </h2>
            )}
            <p>
              {data.definedWords.map((definedWord) => (
                <li className={classes.wordList}>{definedWord}</li>
              ))}
            </p>

            {undefinedWordsFrequency === 0 ? null : (
              <h2 className={classes.wordList}>
                {undefinedWordsFrequency} Combination/s
              </h2>
            )}
            {data.undefinedWords.map((undefinedWord) => (
              <li className={classes.wordList}>{undefinedWord}</li>
            ))}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
  },
  paper: {
    backgroundColor: '#CCD7AC',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: '50%',
    minWidth: '45%',
    maxHeight: '45%',
    minHeight: '80%',
    overflowY: 'scroll',
    overflowX: 'scroll',
  },
  wordList: {
    width: '900px',
    textAlign: 'center',
    fontFamily: "'Lato', sans-serif",
    color: '#70163c',
    fontSize: '140%',
    fontWeight: 'bold',
  },
}));
