import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <div className="container px-lg-5">
            <div className="banner-item d-flex justify-content-center align-items-center flex-column m-4 m-lg-5 text-center">
                <h1>A warm welcome!</h1>
                <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                <div className='banner-button'>
                    <button className='btn btn-primary'>Call to action</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
