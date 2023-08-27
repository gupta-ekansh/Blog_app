'use client'
import React, { useEffect, useState } from 'react'
import styles from '../Blog.module.css';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';



export default function Blog({ posts }) {
  console.log(posts)
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log("Use Effect is running")
    fetch('http://localhost:8000/api/blogs')
      .then((a) => {
        return a.json()
      })
      .then((parsed) => {
        setBlogs(parsed)
        setLoading(false)
      })
  }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {loading ? (<p>Loading....</p>) :
          (blogs.map((blog) => {
            return <div className={styles.blogContainer} key={blog.slug}>
              <div>
                <Link href={`blogpost/${blog.slug}`} className={styles.blogItemLink}>
                <h2 className={styles.blogItemh2}>{blog.title}</h2>
              </Link>
              </div>
              <div className={styles.linkp}>
                <p className={styles.blogItemp}>{blog.metadesc.substr(0, 140)}.....</p>
                <Link href={`blogpost/${blog.slug}`} className={styles.readMoreLink}>
                  <button className={styles.readMoreButton}>Read More</button>
                </Link>
              </div>


            </div>
          })
          )
        }
      </main>
    </div>
  )
}


