import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButon = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]
);

const Button = ({children, buttonType, isLoading, ...otherProps}) => {
    const CustomButton = getButon(buttonType);
    return (
        <CustomButton disabled = {isLoading} {...otherProps}>
            { isLoading ? <ButtonSpinner/> : children}
        </CustomButton>
    )
}

export default Button;