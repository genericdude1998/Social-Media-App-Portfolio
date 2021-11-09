export const mockFeedInitialState = [];
export const mockLoginReducerInitialState = {username:'', password:'', token:null, error: null};
export const mockStoreInitialState = {login: mockLoginReducerInitialState, feed: mockFeedInitialState};
export const mockUsername = 'username';
export const mockPassword = 'password';
export const correctUsername = 'Adam';
export const correctPassword = 1234;
export const mockToken = 'mock_token';
export const mockOnChangePassword = jest.fn(); 
export const mockOnChangeUsername = jest.fn(); 
export const mockOnSubmitLogin = jest.fn();
export const mockEvent = {target:{value:'mock_value'}, preventDefault: () => {}};
export const mockErrorMessage = 'Mock Error Message!';
export const mockError = {errorMessage: mockErrorMessage};
export const mockPath = '/';
export const mockPosts = ['1','2','3'];