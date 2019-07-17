import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const BlogHeader = (props) => (
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4"><Text field={props.fields.heading} /></h1>
            <p className="lead"><Text field={props.fields.subtext} /></p>
          </div>
        </div>
);
export default BlogHeader;
