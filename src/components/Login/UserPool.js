import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_0jA9YjA4b',
    ClientId: '5ndi504bm7v0bhf41jt12psqo4'
};

export default new CognitoUserPool(poolData);