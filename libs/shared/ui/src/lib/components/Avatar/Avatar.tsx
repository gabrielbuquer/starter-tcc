import { AvatarWrapper } from './Avatar.styled';

type AvatarProps = {
  acronym: string;
}

export const Avatar = ({ acronym }: AvatarProps) => {
  return (
    <AvatarWrapper>
      {acronym}
    </AvatarWrapper>
  )
}
