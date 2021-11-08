import { doSendUsernameAndPasswordThunk, doSetPassword, doSetUsername } from '../../model/actionCreators/actionCreators';

export function mapLoginDispatchToProps(dispatch){
    return {
        onChangeUsername: (e) => dispatch(doSetUsername(e.target.value)),
        onChangePassword: (e) => dispatch(doSetPassword(e.target.value)),
        onSubmitLogin: (username, password) => dispatch(doSendUsernameAndPasswordThunk(username,password)),
    };
}
export function mapLoginStateToProps(state){
    return state;
}