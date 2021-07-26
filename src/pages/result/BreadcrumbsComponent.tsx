import { Link, Breadcrumbs } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
const BreadcrumbsComponent = () => {
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link color='inherit' href='/'>
        <HomeIcon />
      </Link>
      <Link color='inherit' href='/getting-started/installation/'>
        Results /
      </Link>
    </Breadcrumbs>
  );
};

BreadcrumbsComponent.propTypes = {};

export default BreadcrumbsComponent;
