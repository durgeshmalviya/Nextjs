 

export default function Profile({ user }: any) {
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
 
