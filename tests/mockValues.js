export const mockLoginReducerInitialState = {username:'', password:'', token:null, error: null};
export const mockUsername = 'username';
export const mockPassword = 'password';
export const correctUsername = 'Adam';
export const correctPassword = 1234;
export const mockToken = 'mock_token';
export const mockErrorMessage = 'Mock Error Message!';
export const mockOnChangePassword = jest.fn(); 
export const mockOnChangeUsername = jest.fn(); 
export const mockOnSubmitLogin = jest.fn();
export const mockEvent = {target:{value:'mock_value'}, preventDefault: () => {}}