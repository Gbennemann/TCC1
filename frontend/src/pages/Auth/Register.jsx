import { Input, Button, Card } from '@nextui-org/react';
import { UserCircleIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function Register() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(to right, #fef3c7, #fde68a)' }}>
      <Card css={{ p: '$8', mw: '400px' }}>
        <h1 style={{ textAlign: 'center', color: '#92400e', marginBottom: '20px' }}>Register</h1>
        <Input
          label="Username"
          placeholder="coffee_lover"
          contentLeft={<UserCircleIcon style={{ width: '20px', color: '#d97706' }} />}
        />
        <div style={{ margin: '8px 0' }} />
        <Input
          label="Email"
          placeholder="user@coffee.com"
          type="email"
          contentLeft={<EnvelopeIcon style={{ width: '20px', color: '#d97706' }} />}
        />
        <div style={{ margin: '8px 0' }} />
        <Input
          label="Password"
          type="password"
          contentLeft={<LockClosedIcon style={{ width: '20px', color: '#d97706' }} />}
        />
        <div style={{ margin: '16px 0' }} />
        <Button color="warning" css={{ width: '100%' }}>Register</Button>
      </Card>
    </div>
  );
}