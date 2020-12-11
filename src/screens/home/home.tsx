import React from 'react'

interface Props {
    title: string[]
}

export  const Home = (props: Props) => {
    const listOfItems: string[] = props.title
    return (
        <ul>
           {listOfItems.map((post) => 
           <li>{post}</li>
           )}
        </ul>
    )
}
