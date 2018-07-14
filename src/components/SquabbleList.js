import React from 'react';
import Squabble from './Squabble';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      squabbles: state.squabbles
    }
};

const SquabbleList = ({squabbles}) => {
  return(
    <ul>
      {squabbles.map(sq =>
          <Squabble key={sq.id} {...sq}/>
        )
      }
    </ul>
  );
};



//export default SquabbleList;
export default connect(mapStateToProps)(SquabbleList);
