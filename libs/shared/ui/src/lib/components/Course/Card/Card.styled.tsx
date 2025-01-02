import { css, styled } from '@mui/material';

export const Box = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${theme.palette.common.white};
    border-radius: ${theme.shape.borderRadius}px;
    box-shadow: 0 2px 10px ${theme.palette.grey[200]};
  `};
`;

export const TeacherBox = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    gap: ${theme.spacing(1)};
    padding: ${theme.spacing(2)};
    border-bottom: 1px solid ${theme.palette.grey[200]};
    box-sizing: border-box;
  `};
`;

export const TeacherName = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(0.5)};
  `};
`;

export const CourseBox = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    gap: ${theme.spacing(1)};
    padding: ${theme.spacing(2)};
    border-bottom: 1px solid ${theme.palette.grey[200]};
    box-sizing: border-box;
  `};
`;

export const CourseInfo = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid ${theme.palette.grey[200]};
    box-sizing: border-box;
    &>div {
      flex: 1;
      &:not(:last-child) {
        border-right: 1px solid ${theme.palette.divider};
      }
    }
  `};
`;

export const Actions = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: ${theme.spacing(2)};
    box-sizing: border-box;
  `};
`;
