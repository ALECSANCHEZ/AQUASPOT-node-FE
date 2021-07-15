import { Helmet } from 'react-helmet';
import {Box,Container,Grid, Typography} from '@material-ui/core';
import CosechasEnVivo from '../components/Dashboard/ProdumarTaura/CosechasEnVivo.js';
import DíasAlquiladosCosechadoras from '../components/Dashboard/ProdumarTaura/DíasAlquiladosCosechadoras.js';
import DuraciónCosechas_Hectárea from '../components/Dashboard/ProdumarTaura/DuraciónCosecha_Hectárea.js';
import Gramaje from '../components/Dashboard/ProdumarTaura/Gramaje.js';
import PiscinaMásProductiva from '../components/Dashboard/ProdumarTaura/PiscinaMásProductiva.js';
import TallaMásPescada from '../components/Dashboard/ProdumarTaura/TallaMásPescada.js';
import TotalLibras_Hectareas from '../components/Dashboard/ProdumarTaura/TotalLibras_Hectarea.js';
import TotalLibrasCosechadas from '../components/Dashboard/ProdumarTaura/TotalLibrasCosechadas.js';
import TotalCosechadorasAlquiladas from '../components/Dashboard/ProdumarTaura/TotalCosechadorasAlquiladas.js';
import TotalCosechadorasPropias from '../components/Dashboard/ProdumarTaura/TotalCosechadorasPropias.js';


function Produmar_Taura(){

  return(
    <>
    <Helmet>
    <title>ProdumarTaura | Material Kit</title> 
    </Helmet>
    <Box
      sx={{
        minHeight: '100%',
        py: 3
      }}
    >
        <Container maxWidth={false}>
        <Grid container
          spacing={3}>
          <Grid item> 
          <Typography variant="h5"  gutterBottom color='textPrimary'>
            Produmar Taura
          </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <TotalLibrasCosechadas />
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <TotalLibras_Hectareas />
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <PiscinaMásProductiva />
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <DuraciónCosechas_Hectárea/>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <TallaMásPescada />
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <DíasAlquiladosCosechadoras />
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <TotalCosechadorasPropias/>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <TotalCosechadorasAlquiladas />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <CosechasEnVivo sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Gramaje />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
    };

export default Produmar_Taura;