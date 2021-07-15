import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Coupling from '../../img/PUBLICIDAD/Coupling.png';
import Juego_Mangueras_Hidraulicas from '../../img/PUBLICIDAD/Juego_Mangueras_Hidraulicas.png';
import Mando_Seinmex from '../../img/PUBLICIDAD/Mando_Seinmex.png';
import Motor_Charlyn from '../../img/PUBLICIDAD/Motor_Charlyn.png';
import Motor_Parker from '../../img/PUBLICIDAD/Motor_Parker.png';
import Valvula_de_alivio_Seinmex from '../../img/PUBLICIDAD/Valvula_de_alivio_Seinmex.png';
import AED8 from '../../img/PUBLICIDAD/Abrazadera_enganche_de_8.png';
import AED10 from '../../img/PUBLICIDAD/Abrazadera_enganche_de_10.png';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


 //The example data is structured as follows:

  const tileData = [
    {
      img: Coupling,
      title: 'Coupling',
      author: '',
    },
    {
      img: Juego_Mangueras_Hidraulicas,
      title: 'Juego',
      author: 'Mangueras Hidraulicas',
    },
    {
      img: Mando_Seinmex,
      title: 'Mando Seinmex',
      author: '',
    },
    {
      img: Motor_Charlyn,
      title: 'Motor Charlyn',
      author: '',
    },
    {
      img: Motor_Parker,
      title: 'Motor Parker',
      author: '',
    },
    {
      img: Valvula_de_alivio_Seinmex,
      title: 'Valvula de ',
      author: 'alivio Seinmex',
    },
    {
      img: AED8,
      title: "Abrazadera de",
      author: "enganche 8''",
    },
    {
      img: AED10,
      title: "Abrazadera de",
      author: "enganche 10''",
    },
  ];
 
export default function Products() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Products</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span> {tile.author}</span>}      //ENMEDIO DE <span> by:  sdfdfsf </span>
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}