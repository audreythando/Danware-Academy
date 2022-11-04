import { GetServerSideProps } from 'next'
import React from 'react'

function lessons ({test}) => {
  return (
    <div>lessons</div>
  )
}

export default lessons

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch("http://localhost:1337/admin/api/lesson-plans")
    const data = await res.json()
    let test = data.data
    console.log("data",test)
    return {
        props:{
            test
        }
    }
}