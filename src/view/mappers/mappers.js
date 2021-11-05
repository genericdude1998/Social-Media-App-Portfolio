import { doSetPassword, doSetUsername } from '../../model/actionCreators/actionCreators';

export function mapLoginDispatchToProps(dispatch){
    return {
        onChangeUsername: (username) => dispatch(doSetUsername(username)),
        onChangePassword: (password) => dispatch(doSetPassword(password)),
    };
}
export function mapLoginStateToProps(state){
    return state;
}