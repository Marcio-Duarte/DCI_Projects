import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Navbar from './Navbar';
import Announcement from './Announcement';
import Timmer from './Timer';
import MovieCard from './MovieCard';
import Footer from './Footer';
import './movieApp.scss';

export default class MovieApp extends Component {
  constructor() {
    super();
    this.state = {
      showAnnouncement: true,
      movies: [],
    };
    this.handleShowAnnouncement = this.handleShowAnnouncement.bind(this);
  }

  handleShowAnnouncement() {
    this.setState({
      showAnnouncement: false,
    });
  }

  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/tv/airing_today?page=1&language=en-US&api_key=52b66ff0d06f4904b89be7ae30fdd54d'
      )
      .then((res) => {
        this.setState({
          movies: res.data.results,
        });
      })
      .catch((error) => {
        return error;
      });
  }

  render() {
    const { showAnnouncement, movies } = this.state;
    const announcement = showAnnouncement ? <Announcement /> : null;
    const announcementBtn = showAnnouncement ? (
      <Button
        label='Hide message'
        icon='pi pi-times'
        className='p-button-danger'
        onClick={this.handleShowAnnouncement}
      />
    ) : null;

    const footer = (
      <span>
        {announcementBtn}
        <Timmer />
      </span>
    );
    return (
      <div id='dci-movieApp' className='p-grid'>
        <Navbar />
        <div className='p-col-12'>
          <div className='p-col-8 p-offset-2'>
            <Card className='announceCard' title='Welcome' footer={footer}>
              {announcement}
            </Card>
          </div>
        </div>
        {movies.map((movie, i) => {
          return <MovieCard key={i} movie={movie} />;
        })}
        <Footer />
      </div>
    );
  }
}
