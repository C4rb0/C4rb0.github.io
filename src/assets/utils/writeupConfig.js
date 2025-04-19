export const writeupOrgs = [
    {
      id: 'hackthebox',
      name: 'HackTheBox',
      path: '/writeups/hackthebox'
    },
    {
      id: 'tryhackme',
      name: 'TryHackMe',
      path: '/writeups/tryhackme'
    },
    {
      id: 'test1',
      name: 'Test Environment',
      path: '/writeups/test1'
    }
  ];
  
  // Componenti condivisi
  export { default as OrgWriteups } from '../components/pages/writeups/[org]/index';
  export { default as WriteupDetail } from '../components/pages/writeups/[org]/[slug]';