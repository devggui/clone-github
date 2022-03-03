import React from 'react';
import { Link } from 'react-router-dom';

import { Container, BreadCrump, Stars, LinkButton, GithubIcon, ForkIcon, StarIcon, RepoIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrump>
        <RepoIcon />
        <Link className={'username'} to={'/devguiet'}>
          devguiet
        </Link>

        <span>/</span>
        
        <Link className={'reponame'} to={'/devguiet/Clone-Github'}>
          Clone-Github
        </Link>
      </BreadCrump>
      <p>Contains all of my projects</p>
      <Stars>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>       
      </Stars>
      <LinkButton href={'https://github.com/devguiet/Clone-Github'}>
          <GithubIcon />
          <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;