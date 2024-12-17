import styled from "styled-components";
import Colors from "../colors/colors";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    icon?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

const StyledButton = styled.button`
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: ${Colors.primary};
    color: white;
    font-weight: 500;
    border-radius: 0.375rem;
    transition: background-color 0.3s ease;
    text-align: center;
    cursor: pointer;
    display: flex;         
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #545454;
    }
`;

const IconWrapper = styled.span`
    margin-right: 0.5rem;  
    display: flex;
    align-items: center;
`;

const Button = ({
    label,
    icon,
    type = 'button',
    onClick,
    ...props
}: ButtonProps) => {
    return (
        <StyledButton type={type} onClick={onClick} {...props}>
            {icon && <IconWrapper>{icon}</IconWrapper>}
            {label}
        </StyledButton>
    );
};

export default Button;
