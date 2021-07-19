/** A customize anchor tag.
  @param {string} [href] - link to navigate.
  @param {ReactNode} [href] - link to navigate.
*/
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
interface I_ActiveLink {
  children?: ReactNode;
  href: string;
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

  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
};

ActiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
export default ActiveLink;
