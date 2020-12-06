const fields = {
  email: {
    label: 'Email address',
    id: 'email',
    type: 'text',
    onChangeHandler: () => {},
    placeholder: 'sample@email.com'
  },
  password: {
    label: 'Password',
    id: 'password',
    type: 'password',
    onChangeHandler: () => {},
    placeholder: '***********'
  }
}

const buttons = {
  facebookLogIn: {
    text: 'Log in with Facebook',
    variant: 'facebook'
  },
  facebookSignUp: {
    text: 'Sign up with Facebook',
    variant: 'facebook'
  },
  submitLogIn: {
    text: 'Login'
  },
  submitSignIn: {
    text: 'Sign in'
  },
  submitResetPassword: {
    text: 'Request password reset'
  }
}

export {fields, buttons};