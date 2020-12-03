import LandingPage from './page/LandingPage';

// Front End
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/', exact: true, name: 'Landing', component: LandingPage },
  // Handle 404 Not Found
//   { path: '*', name: 'Landing', component: NotFound },
];

export default routes;