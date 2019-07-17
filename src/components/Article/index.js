import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Article = (props) => (
  <div>
    <p>Article Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Article;
