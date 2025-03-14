import { Card, Typography } from '@nextui-org/react';

export default function SensorStatus() {
  return (
    <Card css={{ p: '$8' }}>
      <Typography h3 css={{ mb: '$4' }}>Sensor Status</Typography>
      <Typography>All sensors are operational.</Typography>
    </Card>
  );
}