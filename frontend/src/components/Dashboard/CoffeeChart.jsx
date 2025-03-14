import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Card, Text } from '@nextui-org/react';

const data = [
  { hour: '00:00', cups: 0 },
  { hour: '06:00', cups: 2 },
  { hour: '12:00', cups: 5 },
  { hour: '18:00', cups: 3 },
  { hour: '24:00', cups: 1 },
];

export default function CoffeeChart() {
  return (
    <Card css={{ p: '$8' }}>
      <Text h3 css={{ mb: '$4' }}>Coffee Consumption</Text>
      <LineChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="cups" stroke="#b45309" />
      </LineChart>
    </Card>
  );
}