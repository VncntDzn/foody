import { ReactNode } from 'react';
import { useRouter } from 'next/router';
interface I_ActiveLink {
  children?: ReactNode;
  href?: string;
  as?: string;
}
const ActiveLink = ({ children, href = '/', as = '/' }: I_ActiveLink) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? '#B76A40' : 'black',
    fontWeight: 600,
    fontFamily: 'Montserrat',
    fontSize: 'clamp(1rem, 5vw, 1.3rem)',
    textDecoration: 'none',
  };

  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
};

export default ActiveLink;
