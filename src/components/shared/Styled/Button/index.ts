import styled from 'styled-components'
import { FontSize, FontWeight } from '../Text'

export interface ButtonProps {
  width?: string
  height?: string
  isDisabled?: boolean
  isActive?: boolean
  disabledBackColor?: string
  hoverBackColor?: string
  activeBackColor?: string
  defaultBackColor?: string
  weight?: FontWeight
  font?: string
  border?: string
  fontSize?: FontSize
  borderColor?: string
}

export const Button = styled.button<ButtonProps>`
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ defaultBackColor }) => defaultBackColor || 'none'};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-family: ${({ font }) => (font ? font : '')};
  font-size: ${({ fontSize }) =>
    fontSize === 'small'
      ? 'var(--small-font-size)'
      : fontSize === 'normal'
      ? 'var(--normal-font-size)'
      : fontSize === 'large'
      ? 'var(--large-font-size)'
      : ''};
  font-weight: ${({ weight }) =>
    weight === 'normal'
      ? 'var(--normal-font-weight)'
      : weight === 'bold'
      ? 'var(--bold-font-weight)'
      : ''};
  border: ${({ border, isDisabled, borderColor }) =>
    border
      ? border
      : `2px solid ${
          isDisabled
            ? 'var(--disabled-color)'
            : borderColor || 'var(--normal-color)'
        }`};
  border-radius: 8px;
  background-color: ${({
    disabledBackColor,
    activeBackColor,
    defaultBackColor,
    isActive,
    isDisabled,
  }) =>
    isActive && !isDisabled
      ? activeBackColor
      : isActive && isDisabled
      ? disabledBackColor
      : defaultBackColor || 'none'};
  color: ${({ isDisabled, isActive, color }) =>
    color
      ? color
      : isDisabled && !isActive
      ? 'var(--disabled-color)'
      : isActive
      ? 'var(--white-color)'
      : ''};
  outline: none;
  cursor: ${({ isDisabled }) => (!isDisabled ? 'pointer' : '')};
`

Button.defaultProps = {
  isDisabled: false,
  isActive: true,
  width: '100%',
  height: '56px',
}
