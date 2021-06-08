import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Textarea from '../components/Textarea'
import { RootState } from '../store'
import styles from '../styles/modules/newPost.module.scss';

export default function newPost() {
  const router = useRouter();
  const profile = useSelector((state: RootState) => state.profile.profile.currentUser);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const date = new Date();
    const response = await fetch('http://localhost:4200/posts',
    {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    });
    const posts = await response.json();

    const data = {
      id: posts.length+1,
      title: formData.get('title'),
      text: formData.get('text'),
      preview: formData.get('text'),
      date: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
    }

    if (data.title === '' || data.text === '') {
      alert('Empty title or text');
      return;
    }

    const { status, statusText } = await axios.post('http://localhost:4200/posts', data);

    if (status !== 201) {
      alert(statusText);
      return;
    }

    router.push('/');
  }

  return (
    profile ? (
      <Layout title="New post">
        <div className="page">
          <PageTitle>
            Create new post
          </PageTitle>
          <Form
            onSubmit={handleSubmit}
          >
            <>
              <Input 
                id="newPost-title"
                label="Title:"
                className={styles.input}
                name="title"
              />
              <Textarea 
                id="newPost-textarea"
                label="Post content: "
                className={styles.input}
                name="text"
              />
              <Button className={styles.btn}>
                Add new post
              </Button>
            </>
          </Form>
        </div>
      </Layout>
    ) : (
      <div className="page">Unauthorized access</div>
    )
  )
}
