import { Helmet } from 'react-helmet';
import {Box,Container,Grid, Typography} from '@material-ui/core';
//import CosechasEnVivo from '../components/Dashboard/ProdumarDurán/CosechasEnVivo.js';
import DíasAlquiladosCosechadoras from '../components/Dashboard/ProdumarDurán/DíasAlquiladosCosechadoras.js';
import DuraciónCosechas_Hectárea from '../components/Dashboard/ProdumarDurán/DuraciónCosecha_Hectárea.js';
//import Gramaje from '../components/Dashboard/ProdumarDurán/Gramaje.js';
import PiscinaMásProductiva from '../components/Dashboard/ProdumarDurán/PiscinaMásProductiva.js';
import TallaMásPescada from '../components/Dashboard/ProdumarDurán/TallaMásPescada.js';
import TotalLibras_Hectareas from '../components/Dashboard/ProdumarDurán/TotalLibras_Hectarea.js';
import TotalLibrasCosechadas from '../components/Dashboard/ProdumarDurán/TotalLibrasCosechadas.js';
import TotalCosechadorasAlquiladas from '../components/Dashboard/ProdumarDurán/TotalCosechadorasAlquiladas.js';
import TotalCosechadorasPropias from '../components/Dashboard/ProdumarDurán/TotalCosechadorasPropias.js';
import TallaDeCosecha from '../components/Dashboard/ProdumarDurán/TallaDeCosecha.js';
import Gramaje2 from '../components/Dashboard/ProdumarDurán/Gramaje2.js';
import CosechasEnVivo2 from '../components/Dashboard/ProdumarDurán/CosechasEnVivo2.js';
import LibrasCosechadas from '../components/Dashboard/ProdumarDurán/LibrasCosechadas.js';
import Cosechas from '../components/Dashboard/ProdumarDurán/Cosechas.js';
import Cosechadoras from '../components/Dashboard/ProdumarDurán/Cosechadoras.js';
import CosechadorasPropiasdasActivas from '../components/Dashboard/ProdumarDurán/CosechadorasPropiasActivas.js';
import CosechadorasAlquiladasActivas from '../components/Dashboard/ProdumarDurán/CosechadorasAlquiladasActivas.js';
import HorasTrabajadasCosechadoras from '../components/Dashboard/ProdumarDurán/HorasTrabajadasCosechadoras.js';
import LibrasCosechadasXMaquina from '../components/Dashboard/ProdumarDurán/LibrasCosechadasXMaquina.js';
import Maquina from '../components/Dashboard/ProdumarDurán/Maquina.js';

import Link from '@material-ui/core/Link';


function Aquaspot(){
  return (
      <Typography variant = "body2" color ="textSecondary" align = "center">
          {'Aquaspot Ⓐ '}
          <Link color = "inherit" href = "https://google.com/">
              Your Web
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
      </Typography>
  );
};

function ProdumarDuran(){
  

  return(
    <>
    <Helmet>
    <title>ProdumarDuran | Material Kit</title> 
    </Helmet>
    
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item> 
              <Typography variant="h5"  gutterBottom color='textPrimary'>
                Produmar Duran
              </Typography>
            </Grid>
          </Grid>
        <Grid container spacing={3}>
          <Grid item lg={3} md={6} xl={3} xs={12}> <TotalLibrasCosechadas /> </Grid>
          <Grid item lg={3} md={6} xl={3} xs={12}> <TotalLibras_Hectareas /> </Grid>
          <Grid item lg={3} md={6} xl={3} xs={12}> <PiscinaMásProductiva /> </Grid>
          <Grid item lg={3} md={6} xl={3} xs={12}> <DuraciónCosechas_Hectárea/> </Grid>
          <Grid item lg={3} md={6} xl={3} xs={12}> <TallaMásPescada /> </Grid>
          <Grid item lg={3} md={6} xl={3} xs={12}> <DíasAlquiladosCosechadoras /> </Grid>
          <Grid item lg={3} md={6} xl={3} xs={12}> <TotalCosechadorasPropias/> </Grid>
          <Grid item lg={3} md={6} xl={3} xs={12}> <TotalCosechadorasAlquiladas /> </Grid>
          <Grid item lg={6} md={12} xl={9} xs={12}> <TallaDeCosecha /> </Grid>
          <Grid item lg={6} md={12} xl={9} xs={12}> <Gramaje2 /> </Grid>
          <Grid item lg={6} md={12} xl={9} xs={12}> <CosechasEnVivo2 /> </Grid>
          <Grid item lg={6} md={12} xl={9} xs={12}> <LibrasCosechadas /> </Grid>
          <Grid item lg={6} md={12} xl={9} xs={12}> <Cosechas /> </Grid>
          <Grid item lg={3} md={6} xl={3} xs={12}> <CosechadorasPropiasdasActivas /> </Grid>
          <Grid item lg={3} md={6} xl={3} xs={12}> <CosechadorasAlquiladasActivas /> </Grid>
          <Grid item lg={6} md={12} xl={9} xs={12}> <Cosechadoras /> </Grid>                          
          <Grid item lg={6} md={12} xl={9} xs={12}> <LibrasCosechadasXMaquina/> </Grid>
          <Grid item lg={6} md={12} xl={9} xs={12}> <HorasTrabajadasCosechadoras /> </Grid>
          <Grid item lg={6} md={12} xl={9} xs={12}> <Maquina /> </Grid>
        </Grid>
        <Box pt={10}>
            <Aquaspot />
        </Box>
      </Container>
    </>
);
};

export default ProdumarDuran;
