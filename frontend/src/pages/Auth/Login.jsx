import { Input, Button, Card } from '@nextui-org/react';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function Login() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(to right, #fef3c7, #fde68a)' }}>
      <Card css={{ p: '$8', mw: '400px' }}>
        <h1 style={{ textAlign: 'center', color: '#92400e', marginBottom: '20px' }}>Login</h1>
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
        <Button color="warning" css={{ width: '100%' }}>Sign In</Button>
      </Card>
    </div>
  );
}