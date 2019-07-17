import React from 'react';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

const imgStyle = {
  height: '150px',
  objectFit: 'cover'
};

const BlogMainContent = (props) => (
  <div className="row">
    <div className="col-lg-12">
      <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: '100%'}}>
        <Image media={props.fields.image} className="card-img-top" style={imgStyle} editable={false} />
          <div className="card-body">
            <h5 className="card-title"><Text field={props.fields.title} /></h5>
            <h6 className="card-subtitle mb-2 text-muted">by <Text field={props.fields.author} /></h6>
            <p className="card-text"><Text field={props.fields.content} /></p>
            <Link 
            field={props.fields.url}
            style={{float: 'right'}} 
            className="card-link">Read More
            </Link>
          </div>
      </div>
    </div>
  </div>
);

export default BlogMainContent;
