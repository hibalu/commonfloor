import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './handpickedproject.css'
const HandpickedProjects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = [
    {
      id: 1,
      url: "https://teja10.kuikr.com//r1/20220902/ak_1920_688647097-1662111595_300x300.jpeg",
      title: "Keya Around The Life",
      price: "1.71 Crores To 2.38 Crores",
      location: "in White Field, Bangalore",
      model:"2,3,4 BHK Apartment",
      company:"Keya Homes"
    },
    {
      id: 2,
      url: "	https://teja10.kuikr.com//r1/20240329/ak_2000_835781068-1711698437_300x300.jpeg",
      title: "Keya Around The Life",
      price: "1.71 Crores To 2.38 Crores",
      location: "in White Field, Bangalore",
      model:"2,3,4 BHK Apartment",
      company:"Keya Homes"
    },
    {
      id: 3,
      url: "https://teja10.kuikr.com//r1/20230503/ak_655_900632978-1683084205_300x300.jpeg",
      title: "The Icon Eden",
      price: "1.71 Crores To 2.38 Crores",
      location: "in Hoskot, Bangalore",
      model:"Plot",
      company:"Icon Eden"
    },
    {
      id: 4,
      url: "https://teja10.kuikr.com//r1/20220207/ak_2328_41660397-1644218377_300x300.jpeg",
      title: "VRR Golden Enclave Phase 2",
      price: "3.12 Crores To 3.16 Crores",
      location: "in Electronic City Phase 1, Bangalore",
      model:"Villa",
      company:"VRR & Co"
    },
    {
      id: 5,
      url: "	https://teja10.kuikr.com//r1/20220511/ak_1213_315688084-1652262411_300x300.jpeg",
      title: "Keya Around The Life",
      price: "1.71 Crores To 2.38 Crores",
      location: "in White Field, Bangalore",
      model:"2,3,4 BHK Apartment",
      company:"Keya Homes"
    },
    {
      id: 6,
      url: "https://teja10.kuikr.com//r1/20221014/ak_812_488000891-1665751580_300x300.png",
      title: "Keya Around The Life",
      price: "1.71 Crores To 2.38 Crores",
      location: "in White Field, Bangalore",
      model:"2,3,4 BHK Apartment",
      company:"Keya Homes"
    },
    {
      id: 7,
      url: "  https://teja10.kuikr.com//r1/20240327/ak_2156_1834162328-1711530882_300x300.jpeg",
      title: "Keya Around The Life",
      price: "1.71 Crores To 2.38 Crores",
      location: "in White Field, Bangalore",
      model:"2,3,4 BHK Apartment",
      company:"Keya Homes"
    },
    {
      id: 8,
      url: "  https://teja10.kuikr.com//r1/20240224/ak_1600_1756326592-1708758199_300x300.jpeg",
      title: "Keya Around The Life",
      price: "1.71 Crores To 2.38 Crores",
      location: "in White Field, Bangalore",
      model:"2,3,4 BHK Apartment",
      company:"Keya Homes"
    },
    {
      id: 9,
      url: "  https://teja10.kuikr.com//r1/20221021/ak_4000_158414983-1666342333_300x300.jpeg",
      title: "Keya Around The Life",
      price: "1.71 Crores To 2.38 Crores",
      location: "in White Field, Bangalore",
      model:"2,3,4 BHK Apartment",
      company:"Keya Homes"
    },
  ];

  return (
    <div className="container " style = {{marginRight:"20px"}}>
      <h1>Carousel</h1>
      <Carousel responsive={responsive}>
       {
        data.map((item, index) => {
            return(
                <div key ={index} className="card " style={{width: "20rem", height:"400px", borderRadius:"0px"}}>
                <img className="card-img-top" src={item.url} alt="Card image cap" style ={{height:"170px", borderRadius:"0px"}}/>
                <div className="card-body ">
                  <p className="price">{item.price}</p>
                  <h6>{item.title}</h6>
                  <p className="card-text">{item.location}</p>
                  <p className="card-text"> <span>Marketed By:</span>{item.company}</p>

                </div>
              </div>
            )
        })
       }
      </Carousel>
      ;
    </div>
  );
};

export default HandpickedProjects;
