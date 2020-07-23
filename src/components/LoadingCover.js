import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
  },
});

const LoadingCover = () => {
  const classes = useStyles();
  return (
    <Typography component="div" className={classes.root}>
      <CircularProgress color="secondary" />
      <Typography
        data-testid="loadingText"
        component="div"
        className={classes.text}
      >
        Loading...
      </Typography>
    </Typography>
  );
};

export default LoadingCover;
