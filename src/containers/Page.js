import React, { Component } from 'react';

import Article from './Article.jsx';

class Page extends Component {
  render() {
    let { posts, filterText } = this.props;

    return (
      <div id="page" className="page page--index">
        {
          posts.map((post, index) => {
            let props = {
              key: index,
              attrs: post
            };

            if (post.type.indexOf(filterText) === -1) {
              return false;
            } else {
              return (
                <Article {...props} />
              );
            }
          })
        }
      </div>
    );
  }
}

export default Page;