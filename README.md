# Aws-Resources-Examples

- Aws basic Dynamodb cdk and Api example

### CDK - Create Infrastructure with aws cdk
1. Cdk will require aws user credentials
```
    export AWS_ACCESS_KEY_ID=<XXXX>
    export AWS_SECRET_ACCESS_KEY=<XXXX>
    export AWS_DEFAULT_REGION=<XXXX>
```

2. Add Environmental Variables `.env` file
```
    AWS_DEFAULT_REGION=<region>
    APP_NAME=<MyAppName>

```

3. Install and Deploy
```
    npm install
    npm run deploy
```
