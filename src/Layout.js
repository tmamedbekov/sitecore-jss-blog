import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/app.css';

const Layout = ({ route }) => (
  <React.Fragment>
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Helmet>

    <VisitorIdentification />

    <div>
      <Placeholder name="jss-header" rendering={route} />
    </div>
    <div className="container">
      <Placeholder name="jss-main" rendering={route} />
    </div>
  </React.Fragment>
);

export default Layout;
