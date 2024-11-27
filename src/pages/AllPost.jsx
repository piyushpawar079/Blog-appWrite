import React, { useState, useEffect }from 'react'
import appWriteService from '../appwrite/db_Bucket.js'
import { PostCard, Container } from '../components'

const AllPost = () => {

    const [post, setPost] = useState([])

    useEffect(() => {

        appWriteService.getPosts([])
            .then((posts) => {
                if (posts) {
                    setPost(posts.documents)
                }
            })

    }, [])
    

  return (
    <div className='w-full py-8'>
        <Container>

            <div className="flex flex-wrap">
                {post.map((value) => (
                    <div key={value.$id} className='p-2 w-1/4'>
                        <PostCard {...value} />
                    </div>
                ))}

            </div>

        </Container>
    </div>
  )
}

export default AllPost