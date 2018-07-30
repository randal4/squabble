import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SquabbleFirestore extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillMount () {
    const { firestore } = this.context.store
    console.log(firestore);
    firestore.get('squabbles')
  }

  render () {
    return (
      <div>
        {
          this.props.squabbles.map(squabble => (
            <div key={squabble.id}>
              {JSON.stringify(squabble)}
            </div>
          ))
        }
      </div>
    )
  }
}

export default connect((state) => ({
  squabbles: state.firestore.ordered.squabbles
}))(SquabbleFirestore)