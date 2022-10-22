import React from 'react';
import { FormButton, FormContent, FormH1, FormInput, FormWrap, FromLabel, Icon ,Form , Container, Text} from './SigninElements';

const SignIn = () => {
  return (
    <>
     <Container>
       <FormWrap>
        <Icon to='/'>NIBM</Icon>
        <FormContent>
            <Form action='#'>
                <FormH1>Sign in to your account</FormH1>
                <FromLabel htmlFor='for'>Email</FromLabel>
                <FormInput type='email' required />
                <FromLabel htmlFor='for'>Password</FromLabel>
                <FormInput type='password' required />
                <FormButton type='submit'>Continue</FormButton>
                <Text>Forgot password</Text>
            </Form>
        </FormContent>
       </FormWrap>  
    </Container>  
    </>
  );
};

export default SignIn;
