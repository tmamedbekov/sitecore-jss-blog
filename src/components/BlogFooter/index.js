import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const BlogFooter = (props) => (
  <div>
    <p>BlogFooter Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default BlogFooter;
