import classes from './Layout.module.css';
import MainNavigation from '../layout/MainNavigation.js';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
