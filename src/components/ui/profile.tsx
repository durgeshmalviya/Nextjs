// pages/profile.tsx
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Profile({ user }: any) {
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}

export const getServerSideProps = withPageAuthRequired();
