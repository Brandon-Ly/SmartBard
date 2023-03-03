import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_53MSxTr53',
    ClientId: '6t7iieu7iapoadjqj20di1j33h'
};

export default new CognitoUserPool(poolData);