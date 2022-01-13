import { SvgIcon } from 'insomnia-components';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { superDuperFaint, superFaint, ultraFaint } from '../../css/css-in-js';
import { Link } from '../base/link';

const Panel = styled.div({
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pointerEvents: 'none',
});

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'var(--padding-md)',
  textAlign: 'center',
  ...superFaint,
});

const Icon = styled.div({
  fontSize: '9em',
  marginBottom: 'var(--padding-lg)',
  ...superDuperFaint,
});

const Title = styled.div({
  fontWeight: 'bold',
});

const Divider = styled.div({
  height: 1,
  backgroundColor: 'var(--color-font)',
  margin: 'var(--padding-md) var(--padding-xl)',
  maxWidth: 500,
  width: '100%',
  minWidth: 300,
  ...ultraFaint,
});

const SecondaryAction = styled.div({
});

const DocumentationLinks = styled.div({
  marginTop: 'calc(var(--padding-lg))',
  margiBottom: 'var(--padding-md)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
});

// @ts-expect-error the types don't like the addition of !important.  can't say I blame them.
const StyledLink = styled(Link)({
  display: 'flex',
  marginTop: 'var(--padding-md)',
  color: 'var(--color-font) !important', // unfortunately, we've set at the root with !important
  fontWeight: 'normal !important', // unfortunately, we've set at the root with !important
  pointerEvents: 'all',
  '& hover': {
    textDecoration: 'none',
  },
});

const LinkIcon = styled(SvgIcon)({
  paddingLeft: 'var(--padding-sm)',
});

export const EmptyStatePane: FC<{
  icon: ReactNode;
  title: string;
  secondaryAction: ReactNode;
  documentationLinks: {
    title: string;
    url: string;
  }[];
}> = ({
  icon,
  title,
  secondaryAction,
  documentationLinks,
}) => {
  return (
    <Panel>
      <Wrapper>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
        <Divider />
        <SecondaryAction>{secondaryAction}</SecondaryAction>
        <DocumentationLinks>
          {documentationLinks.map(({ title, url }) => (
            <StyledLink key={title} href={url}>
              {title}
              <LinkIcon icon="jump" />
            </StyledLink>
          ))}
        </DocumentationLinks>
      </Wrapper>
    </Panel>
  );
};