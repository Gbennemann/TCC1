import { Card, Typography, Grid } from '@nextui-org/react';
import CoffeeChart from '../components/Dashboard/CoffeeChart.jsx';
import SensorStatus from '../components/Dashboard/SensorStatus.jsx';

export default function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography h1 css={{ color: '#92400e', mb: '20px' }}>Dashboard</Typography>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={6}>
          <CoffeeChart />
        </Grid>
        <Grid xs={12} sm={6}>
          <SensorStatus />
        </Grid>
      </Grid.Container>
    </div>
  );
}