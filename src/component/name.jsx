import React from 'react';
import { connect } from 'react-redux';

import C from '../const';

const NameForDisplay = ({name}) => (<h1>Hello {name}!</h1>);

const mapStateToPropsForName = (state) => {
  return {
    name: state.nameValue
  };
};

const Name = connect(mapStateToPropsForName)(NameForDisplay);

const updateNameAdapter = (fn) => {
  return (e) => {
    e.preventDefault();
    fn(e.target.querySelector('*[name=nameValue]').value);
  };
};

const NameUpdaterForDisplay = ({updateName}) => (<div >
  <form onSubmit={updateNameAdapter(updateName)} >
    <label >Name</label ><input type="text" name="nameValue" />
    <button >Submit</button >
  </form >
</div >);

const mapDispatchToPropsForNameUpdater = (dispatch) => {
  return {
    updateName: (nameValue) => {
      dispatch({
        type: C.UPDATE_NAME,
        nameValue
      });
    }
  };
};

const NameUpdater = connect(null, mapDispatchToPropsForNameUpdater)(NameUpdaterForDisplay);

export { Name as default, Name, NameUpdater };