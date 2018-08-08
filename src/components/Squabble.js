import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = {
  card: {
    marginBottom: 15,
  },
  root: {
    flexGrow: 1,
  },
  actions: {
  },
  vr: {
    borderLeft: '1px grey solid',
    height: 100,
  },
  interior: {
    alignContent: 'column',
  }
};

const Squabbles = (props) => {
  const { classes, id, title, authorVotes, opposerVotes, authorText, opposerText, onClick} = props;
  return (
    <Grid container className={classes.root} spacing={40}>
      <Grid item xs={12} align='center'>
        <Card raised='true' className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
            <hr/>
            <Grid container>
              <Grid item xs={5} className={classes.interior}>
                <Typography component="p">
                  {authorText}
                </Typography>
                <Typography component="p">
                  {authorVotes}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <div className={classes.vr}></div>
              </Grid>
              <Grid item xs={5} className={classes.interior}>
                <Typography component="p">
                  {opposerText}
                </Typography>
                <Typography component="p">
                  {opposerVotes}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>

          <CardActions className={classes.actions}>
            <Grid container>
              <Grid item xs={5}>
                <Button variant="outlined" size="small" color="primary">
                  Vote
                </Button>
              </Grid>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={5}>
                <Button variant="outlined" size="small" color="primary">
                  Vote
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
export default withStyles(styles)(Squabbles);
