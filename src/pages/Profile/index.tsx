import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading } from './styles';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'devguiet'}
            name={'Guilherme Henrique'}
            avatarUrl={'https://avatars.githubusercontent.com/u/100289961?v=4'}
            followers={887}
            following={19}
            company={'Rocketseat'}
            location={'São Paulo, Brazil'}
            email={'devguiet@gmail.com'}
            blog={'linkedin.com/in/devguiet'}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'devguiet'}
                  reponame={'Clone-Github'}
                  description={'Clone on github in react.js'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
              
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />

        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
