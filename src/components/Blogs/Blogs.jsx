import React from 'react'
import styles from './Blogs.module.css'
import { Field, Form } from 'react-final-form';
import { TextArea } from '../Common/FormControl/FormControl';
import { composeValidators, required, maxLength } from '../../utils/validators/validators';

function Blogs(props){
    return (
      <div className={styles.main}>
        <p>Блоги</p>
        <BlogForm {...props} />
        <div>{props.blogPosts.map((e, i) => <p key={i.toString()}>{e}</p>)}</div>
      </div>
    );
}

const BlogForm = (props) => {
  const onSubmit = (e) => {
    props.addPost(e.blogText)
  }
  return(
      <Form
          onSubmit={onSubmit}
          render = {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                  <div>
                      <Field
                          name="blogText"
                          component={TextArea}
                          type="text"
                          placeholder="text"
                          validate={composeValidators(required, maxLength(5))}
                      />
                  </div>
                  <div>
                      <button type="submit">Submit</button>
                  </div>
              </form>
          )}
      />
  )
}

export default Blogs;