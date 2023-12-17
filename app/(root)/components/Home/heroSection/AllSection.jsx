import React from 'react'
import Section from './Section'
const AllSection = () => {
    const sections=[
        {
            id:1,
            title:"الاكسسوارات",
            icon:<i className='fas fa-home'></i>,
            path:"#"
        },
        {
            id:2,
            title:"الاكسسوارات",
            icon:<i className='fas fa-home'></i>,
            path:"#"
        },
        {
            id:3,
            title:"الاكسسوارات",
            icon:<i className='fas fa-home'></i>,
            path:"#"
        },
        {
            id:4,
            title:"الاكسسوارات",
            icon:<i className='fas fa-home'></i>,
            path:"#"
        },
        {
            id:5,
            title:"الاكسسوارات",
            icon:<i className='fas fa-home'></i>,
            path:"#"
        },
        {
            id:6,
            title:"الاكسسوارات",
            icon:<i className='fas fa-home'></i>,
            path:"#"
        },
        {
            id:7,
            title:"الاكسسوارات",
            icon:<i className='fas fa-home'></i>,
            path:"#"
        },
        {
            id:8,
            title:"الاكسسوارات",
            icon:<i className='fas fa-home'></i>,
            path:"#"
        },
        {
            id:9,
            title:"الاكسسوارات",
            icon:<i className='fas fa-home'></i>,
            path:"#"
        },
        {
            id:10,
            title:"الاكسسوارات",
            icon:<i className='fas fa-home'></i>,
            path:"#"
        },
        {
            id:11,
            title:"الاكسسوارات",
            icon:<i className='fas fa-home'></i>,
            path:"#"
        },
    ]
  return (
    <div>
      <div className="bg-light shadow rounded-4" style={{overflowY:"auto",height:"75vh"}}>
{
    sections.map(item =>(
      <div className="my-3 d-flex align-items-center justify-content-around" key={item.id}>
          <Section path={item.path}  title={item.title}/>
          <div className="icon"> {item.icon} </div>
      </div>

    ))
}
      </div>
    </div>
  )
}

export default AllSection
