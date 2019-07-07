import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  card: {
    marginBottom: 15,
    maxWidh: 720,
    margin: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  interior: {
    border: '1px solid black',
    borderRadius: 6,
    padding: 4 
  },
  icons: {
    margin: 5,
    padding: 2,
  },
  footer: {
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  cardHeader: {
    marginBottom: 10,
    align: 'center'
  },
};

const Squabbles = (props) => {
  const { id, currentUser, classes, title, authorVoteUids, opposerVoteUids, authorVotes, opposerVotes, authorText, opposerText, voteAuthorOnClick, voteOpposerOnClick, deleteOnClick} = props;

  const uid = currentUser.uid; 

  const disableVote = (uid === '' || authorVoteUids[uid] || opposerVoteUids[uid]);
  
  return (
    <Card raised={true} className={classes.card}>
      <CardContent>
        <div className={classes.cardHeader}>
          <Grid container >
            <Grid item xs={12} m={2} align='center'>
              <span className={classes.icons}> <FontAwesomeIcon icon={['fas', 'user-circle']} size="3x" /></span>
            </Grid>
            <Grid item xs={12} m={10} align='center'>
              <Typography gutterBottom variant="headline" component="h2">
                {title}
              </Typography>
            </Grid>

          </Grid>
        </div>
        <Grid container>
          <Grid item xs={5} className={classes.interior}>
            <Typography component="p">
              {authorText}
            </Typography>

          </Grid>
          <Grid item xs={2}>
            <div className={classes.vr}></div>
          </Grid>
          <Grid item xs={5} className={classes.interior}>
            <Typography component="p">
              {opposerText}
            </Typography>

          </Grid>
        </Grid>
      </CardContent>

      <CardActions className={classes.actions}>
        <Grid container>
          <Grid item xs={5} align='center'>
            <Typography variant='headline'>
              {authorVotes}
            </Typography>
            <Button variant="raised" disabled={disableVote} size="small" color="primary" onClick={() => voteAuthorOnClick(id)}>
                  Vote
            </Button>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={5} align='center'>                
            <Typography variant='headline'>
              {opposerVotes}
            </Typography>
            <Button variant="raised" disabled={disableVote} size="small" color="primary" onClick={() => voteOpposerOnClick(id)}>
                  Vote
            </Button>
          </Grid>
        </Grid>
      </CardActions>

      <hr/>

      <div id="footer" className={classes.footer}>
        <Grid container>
          <Grid item xs={6} align='left'>
            <span className={classes.icons}> <FontAwesomeIcon icon={false ? ['fas','thumbs-up'] : ['far', 'thumbs-up']} size="lg" /></span>
            <span className={classes.icons}> <FontAwesomeIcon icon={false ? ['fas','star'] : ['far', 'star']} size="lg" /></span>
            <span className={classes.icons}> <FontAwesomeIcon icon={false ? ['fas','trash-alt'] : ['far', 'trash-alt']} size="lg" onClick={() => deleteOnClick(id)}/></span>

          </Grid>
          <Grid item xs={6} align='right'>
            <span className={classes.icons}> <FontAwesomeIcon icon={['fab','facebook-square']} size="lg"/></span>
            <span className={classes.icons}> <FontAwesomeIcon icon={['fab','twitter-square']} size="lg"/></span>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};


export default withStyles(styles)(Squabbles);
