import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import Coupling from '../../img/PUBLICIDAD/Coupling.png';
import Juego_Mangueras_Hidraulicas from 'C:/PROYECTO-1/reactpixabay/FrontEnd/src/img/PUBLICIDAD/Juego_Mangueras_Hidraulicas.png';
import Mando_Seinmex from 'C:/PROYECTO-1/reactpixabay/FrontEnd/src/img/PUBLICIDAD/Mando_Seinmex.png';
import Motor_Charlyn from 'C:/PROYECTO-1/reactpixabay/FrontEnd/src/img/PUBLICIDAD/Motor_Charlyn.png';
import Motor_Parker from 'C:/PROYECTO-1/reactpixabay/FrontEnd/src/img/PUBLICIDAD/Motor_Parker.png';
import Valvula_de_alivio_Seinmex from 'C:/PROYECTO-1/reactpixabay/FrontEnd/src/img/PUBLICIDAD/Valvula_de_alivio_Seinmex.png';
import AED8 from 'C:/PROYECTO-1/reactpixabay/FrontEnd/src/img/PUBLICIDAD/Abrazadera_enganche_de_8.png';
import AED10 from 'C:/PROYECTO-1/reactpixabay/FrontEnd/src/img/PUBLICIDAD/Abrazadera_enganche_de_10.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  imagen: {
    height: 600,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

const tileData = [
    {
      img: Coupling,
      title: 'Coupling',
      author: '',
    },
    {
      img: Juego_Mangueras_Hidraulicas,
      title: 'Juego de mangueras hidraulicas',
      author: '',
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
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5} >
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img  src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}