import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className='item'>
                <div className="container px-lg-5">
                    <div className="row justify-content-center item-list">
                        <div className="col-6 mb-5" style={{padding: '0 1.5rem'}}>
                            <div className="card p-4 p-lg-5 pt-0 pt-lg-0 b-0">
                            <div className='item-icon bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                            <i class="fa-brands fa-bitcoin"></i>
                            </div>
                            <br />
                                <div className="card-body">
                                    <h5 className="card-title">Fresh new layout</h5>
                                    <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mb-5" style={{padding: '0 1.5rem'}}>
                            <div className="card p-4 p-lg-5 pt-0 pt-lg-0 b-0">
                            <div className='item-icon bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                            <i class="fa-solid fa-cloud-arrow-down"></i>
                            </div>
                            <br />
                                <div className="card-body">
                                    <h5 className="card-title">Free to download</h5>
                                    <p className="card-text">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mb-5 " style={{padding: '0 1.5rem'}}>
                            <div className="card p-4 p-lg-5 pt-0 pt-lg-0 b-0">
                            <div className='item-icon bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                            <i class="fa-solid fa-credit-card"></i>
                            </div>
                            <br />
                                <div className="card-body">
                                    <h5 className="card-title">Jumbotron hero header</h5>
                                    <p className="card-text">The heroic part of this template is the jumbotron hero header!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mb-5" style={{padding: '0 1.5rem'}}>
                            <div className="card p-4 p-lg-5 pt-0 pt-lg-0 b-0">
                            <div className='item-icon bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                            <i class="fa-brands fa-bootstrap"></i>
                            </div>
                            <br />
                                <div className="card-body">
                                    <h5 className="card-title">Feature boxes</h5>
                                    <p className="card-text">We've created some custom feature boxes using Bootstrap icons!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mb-5" style={{padding: '0 1.5rem'}}>
                            <div className="card p-4 p-lg-5 pt-0 pt-lg-0 b-0">
                            <div className='item-icon bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                            <i class="fa-solid fa-code"></i>
                            </div>
                            <br />
                                <div className="card-body">
                                    <h5 className="card-title">Simple clean code</h5>
                                    <p className="card-text">We keep our dependencies up to date and squash bugs as they come!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mb-5" style={{padding: '0 1.5rem'}}>
                            <div className="card p-4 p-lg-5 pt-0 pt-lg-0 b-0">
                            <div className='item-icon bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                            <i class="fa-solid fa-check"></i>
                            </div>
                            <br />
                                <div className="card-body">
                                    <h5 className="card-title">A name you trust</h5>
                                    <p className="card-text">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
