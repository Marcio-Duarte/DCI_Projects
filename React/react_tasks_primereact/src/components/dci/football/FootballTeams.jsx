import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import ModalCard from './ModalCard';
import { getTeams } from '../../../services/fetchFootballLeague';
import { shuffleArray } from '../../../utils/array-utils';
import './FootballTeams.scss';

export default function FootballTeams(props) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    (async () => {
      setTeams(await getTeams());
    })();
  }, []);

  function shuffleCards() {
    setTeams(shuffleArray(teams));
  }

  const cardsContainer = teams.map((team, i) => {
    return <ModalCard key={i} football={team} />;
  });

  return (
    <div id='dci-football-project'>
      <Button
        style={{ marginBottom: '.50em' }}
        label='Shuffle Teams'
        icon='pi pi-refresh'
        className='p-button-success btn-shuffle'
        onClick={shuffleCards}
      />
      <div className='p-grid'>{cardsContainer}</div>
    </div>
  );
}
