export default {
  dialogById: state => id => {
    return state.dialogs.find(dialog => dialog.id === id);
  }
};
