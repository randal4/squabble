import React, {Component} from 'react';
import Squabble from './Squabble';
import { FetchSquabbles } from '../actions/FetchSquabbles';
import { connect } from 'react-redux';
import { DeleteSquabble } from '../actions/DeleteSquabbles';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { VoteSquabbles } from '../actions/VoteSquabbles';

const styles = {
  ul : {
    margin: 20,
  },
};

class SquabbleList extends Component {

  componentWillMount() {
    this.props.fetchSquabbles();
  }

  render(){
    const { classes } = this.props;

    return(
      <ul className={classes.ul}>
        {this.props.squabbles.map(sq =>
          <Squabble key={sq.id} {...sq} deleteOnClick={this.props.deleteOnClick} voteOpposerOnClick={this.props.voteOpposerOnClick} voteAuthorOnClick={this.props.voteAuthorOnClick}/>
        )
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    squabbles: state.SquabbleApp.squabbles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOnClick: (id) => {
      return dispatch(DeleteSquabble(id));
    },
    voteAuthorOnClick: (id) => {
      return dispatch(VoteSquabbles(id, 'author'));
    },
    voteOpposerOnClick: (id) => {
      return dispatch(VoteSquabbles(id, 'opposer'));
    },
    fetchSquabbles: () => {
      return dispatch(FetchSquabbles());
    }
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(SquabbleList);
