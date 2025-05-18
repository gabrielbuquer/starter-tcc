import { MenuItem, css, keyframes, styled } from '@mui/material';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Link from 'next/link';

const FadeIn = keyframes`
  from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const FadeOut = keyframes`
  from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
`;

const ScaleIn = keyframes`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }

  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`;

const ScaleOut = keyframes`
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }

  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
`;

export const NavigationRoot = styled(NavigationMenu.Root)`
  ${() => css`
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 1;
  `};
`;

export const NavigationList = styled(NavigationMenu.List)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 4px;
    border-radius: 6px;
    list-style: none;
    gap: ${theme.spacing(1)};
    margin: 0;
  `};
`;

export const NavigationIndicator = styled(NavigationMenu.Indicator)`
  ${() => css`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 10px;
    top: 100%;
    overflow: hidden;
    z-index: 1;
    transition:
      width,
      transform 250ms ease;
    &[data-state='visible'] {
      animation: ${FadeIn} 200ms ease;
    }
    &[data-state='hidden'] {
      animation: ${FadeOut} 200ms ease;
    }
  `};
`;

export const Arrow = styled('div')`
  ${() => css`
    position: relative;
    top: 70%;
    background-color: white;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-top-left-radius: 2px;
  `};
`;

export const NavigationItem = styled(NavigationMenu.Item)`
  ${() => css`
    position: relative;
  `};
`;

export const NavigationTrigger = styled(NavigationMenu.Trigger)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    background-color: transparent;
    border: none;
    cursor: pointer;
  `};
`;

export const NavigationLink = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.h3.fontSize};
    font-weight: ${theme.typography.fontWeightRegular};
    line-height: ${theme.typography.h3.lineHeight};
    color: ${theme.palette.text.primary};
    [data-state='open'] > & {
      color: ${theme.palette.primary.main};
    }
  `};
`;

export const NavigationCaret = styled(KeyboardArrowDownOutlinedIcon)`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.palette.primary.main};
    top: 1px;
    transition: transform 250ms ease;
    [data-state='open'] > & {
      transform: rotate(-180deg);
    }
  `};
`;

export const NavigationContent = styled(NavigationMenu.Content)`
  ${({ theme }) => css`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 0;
    animation-duration: 250ms;
    animation-timing-function: ease;
    background-color: ${theme.palette.common.white};
    box-shadow: 0 2px 10px ${theme.palette.grey[300]};

    @media only screen and (min-width: 600px) {
      width: auto;
    }
  `};
`;

export const MenuContent = styled('ul')`
  ${({ theme }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  `};
`;

export const MenuContentItem = styled(MenuItem)`
  ${({ theme }) => css`
    position: relative;
  `};
`;

export const ViewportPosition = styled('div')`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 100%;
    left: 0;
    perspective: 2000px;
  `};
`;

export const NavigationViewport = styled(NavigationMenu.Viewport)`
  ${({ theme }) => css`
    position: relative;
    transform-origin: top center;
    margin-top: 10px;
    width: 100%;
    background-color: white;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 10px ${theme.palette.grey[300]};
    height: var(--radix-navigation-menu-viewport-height);
    transition:
      width,
      height,
      300ms ease;
    &[data-state='open'] {
      animation: scaleIn 200ms ease;
    }
    &[data-state='closed'] {
      animation: scaleOut 200ms ease;
    }
    @media only screen and (min-width: 600px) {
      width: var(--radix-navigation-menu-viewport-width);
    }
  `};
`;
