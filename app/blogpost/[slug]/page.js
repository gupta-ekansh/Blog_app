'use client'
import React, { useDeferredValue, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from '../../BlogPost.module.css'
function page() {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blog, setBlog] = useState()
  const [loading, setLoading] = useState(true)
  const pathName = usePathname();
  useEffect(() => {
    let pathName_parts = pathName.split('/');
    let desired_part = pathName_parts[2];
    fetch(`http://localhost:8000/api/getblog?slug=${desired_part}`)
      .then((a) => {
        return a.json()
      })
      .then((data) => {
        setBlog(data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [])
  return (
    <div className={styles.container}>
      {loading ? (<p>Loading....</p>) : (<>
        <main className={styles.main}>
          {/* <h1 className={styles.title}>{blog && blog.title}</h1> */}
          <hr className={styles.hr}></hr>
          {/* <div>{blog && blog.content}</div> */}
          {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
        </main>
        <div className={styles.authorSection}>
          <div className={styles.authorInfo}>
            <h3>Written by {blog && blog.author}</h3>
          </div>
        </div>
      </>)}
    </div>
  )
}

export default page