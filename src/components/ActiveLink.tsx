import { ReactNode } from 'react';
import { useRouter } from 'next/router';

interface I_ActiveLink {
  children?: ReactNode;
  href?: string;
}
const ActiveLink = ({ children, href = '/' }: I_ActiveLink) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? '#B76A40' : 'black',
    fontWeight: 600,
    fontFamily: 'Montserrat',
    fontSize: 'clamp(1rem, 5vw, 1.3rem)',
    textDecoration: 'none',
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

export default ActiveLink;
