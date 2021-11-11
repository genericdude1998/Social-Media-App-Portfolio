export const mockUserInfoInitialState = {}
export const mockFeedInitialState = {posts: []};
export const mockNPCInitialState = {newPostError:null, content: null};
export const mockLoginReducerInitialState = {username:'', password:'', token:null, error: null};
export const mockStoreInitialState = {login: mockLoginReducerInitialState, feed: mockFeedInitialState, userInfo: {}, npc: mockNPCInitialState};
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
export const mockName = 'mock_name';
export const mockContent = 'mock_content';
export const mockDate = 'mock_date';
export const mockId = 0;
export const mockCity = 'NY';
export const mockUser =  {id:mockId, name: mockName, joined: mockDate, city: mockCity};
export const mockPost =  {id:mockId, name: mockName, content: mockContent, date:mockDate};

export const mockPosts = [
    {id:'1' , name:mockName, content: mockContent, date:mockDate},
    {id:'2' , name:mockName, content: mockContent, date:mockDate},
    {id:'3' , name:mockName, content: mockContent, date:mockDate},
];

export const mockUsers = [
    mockUser,
];

export const mockDispatch = jest.fn();