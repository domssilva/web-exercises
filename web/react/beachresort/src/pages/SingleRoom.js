import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'

import defaultBcg from '../images/room-1.jpeg'
import {RoomContext} from '../Context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
  constructor(props){
    super(props)
    this.state = {
      slug: props.match.params.slug,
      defaultBcg,
    }
  }

  static contextType = RoomContext

  render() {
    const {getRoom} = this.context
    const room = getRoom(this.state.slug)
    
    if (!room) {
      return <div className="error">
        <h3>no such room could be found.</h3>
      </div>
    }

    const {
      name, 
      description, 
      capacity, 
      size, 
      price, 
      extras, 
      breakfast, 
      pets, 
      images
    } = room
    const [mainImg, ...defaultImg] = images
    // console.log(room)

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, idx) => (
              <img key={idx} src={item} alt={name}/>
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size}m²</h6>
              <h6>
                max capacity : {
                  capacity > 1 ? `${capacity} people` 
                  : `${capacity} person`
                }
              </h6>
              <h6>{pets ? 'Pets Allowed' : 'No Pets Allowed'}</h6>
              <h6>{breakfast && 'free breakfast included' }</h6>
            </article>
          </div>
          <section className="room-extras">
            <h6>Extras</h6>
            <ul className='extras'>
              {
                extras.map((feature, idx) => <li key={idx}>- {feature}</li>)
              }
            </ul>
          </section>
        </section>
      </>
    )
  }
}
