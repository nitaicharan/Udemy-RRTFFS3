export default payload => {
    return (dispatch, getState) => {
        const state = getState();
        console.log(state)
    };
}
