import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import GalleryCard3 from "./gallery-card3";
import apiClient from '../api-client/apiClient';

const Admin = (props) => {
    const [currentMovies, setCurrentMovies] = useState(null);
    const [futureMovies, setFutureMovies] = useState(null);

    const getCurrentMovies = async() => {
        await apiClient
        .get("/movies/getcurrentmovies")
        .then(async (res) => {
            setCurrentMovies(res.data)
        })
    }

    const getFutureMovies = async() => {
        await apiClient
        .get("/movies/getfuturemovies")
        .then(async (res) => {
            setFutureMovies(res.data)
        })
    }

    useEffect(() => {
        getCurrentMovies();
        getFutureMovies();
    },[])

  return (
        <div id="layout-wrapper">
            <div class="main-content">       
                <div class="page-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6 col-xl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="text-uppercase font-size-12 text-muted mb-3">Market Revenue</h6>
                                                <span class="h3 mb-0"> $12,548.25 </span>
                                            </div>
                                            <div class="col-auto">
                                                <span class="badge badge-soft-danger">-24.5%</span>
                                            </div>
                                        </div>
                                        <div id="sparkline2" class="mt-3"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-xl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="text-uppercase font-size-12 text-muted mb-3">Expenses</h6>
                                                <span class="h3 mb-0"> $8,451.28 </span>
                                            </div>
                                            <div class="col-auto">
                                                <span class="badge badge-soft-success">+3.5%</span>
                                            </div>
                                        </div>
    
                                        <div id="sparkline3" class="mt-3"></div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="col-lg-6 col-xl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="text-uppercase font-size-12 text-muted mb-3">Daily Visits</h6>
                                                <span class="h3 mb-0"> 1,12,584 </span>
                                            </div>
                                            <div class="col-auto">
                                                <span class="badge badge-soft-success">+53.5%</span>
                                            </div>
                                        </div>
    
                                        <div id="sparkline4" class="mt-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Recent Customers</h4>
                                        <p class="card-subtitle mb-4">Transaction period from 21 July to 25 Aug</p>
                                        <div class="table-responsive">
                                            <table class="table table-centered table-striped table-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>Customer</th>
                                                        <th>Phone</th>
                                                        <th>Email</th>
                                                        <th>Location</th>
                                                        <th>Create Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="table-user">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Paul J. Friend</a>
                                                        </td>
                                                        <td>
                                                            937-330-1634
                                                        </td>
                                                        <td>
                                                            pauljfrnd@jourrapide.com
                                                        </td>
                                                        <td>
                                                            New York
                                                        </td>
                                                        <td>
                                                            07/07/2018
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td class="table-user">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Bryan J. Luellen</a>
                                                        </td>
                                                        <td>
                                                            215-302-3376
                                                        </td>
                                                        <td>
                                                            bryuellen@dayrep.com
                                                        </td>
                                                        <td>
                                                            New York
                                                        </td>
                                                        <td>
                                                            09/12/2018
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table-user">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Kathryn S. Collier</a>
                                                        </td>
                                                        <td>
                                                            828-216-2190
                                                        </td>
                                                        <td>
                                                            collier@jourrapide.com
                                                        </td>
                                                        <td>
                                                            Canada
                                                        </td>
                                                        <td>
                                                            06/30/2018
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table-user">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Timothy Kauper</a>
                                                        </td>
                                                        <td>
                                                            (216) 75 612 706
                                                        </td>
                                                        <td>
                                                            thykauper@rhyta.com
                                                        </td>
                                                        <td>
                                                            Denmark
                                                        </td>
                                                        <td>
                                                            09/08/2018
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table-user">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Zara Raws</a>
                                                        </td>
                                                        <td>
                                                            (02) 75 150 655
                                                        </td>
                                                        <td>
                                                            austin@dayrep.com
                                                        </td>
                                                        <td>
                                                            Germany
                                                        </td>
                                                        <td>
                                                            07/15/2018
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-6">
                                <div class="card">
                                    <div class="card-body">
                        
                                        <h4 class="card-title">Account Transactions</h4>
                                        <p class="card-subtitle mb-4">Transaction period from 21 July to 25 Aug</p>
                                        
                                        <div class="table-responsive">
                                            <table class="table table-borderless table-hover table-centered table-nowrap mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">4257 **** **** 7852</h5>
                                                            <span class="text-muted font-size-12">11 April 2019</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">$79.49</h5>
                                                            <span class="text-muted font-size-12">Amount</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-17 mb-1 font-weight-normal"><i class="fab fa-cc-visa"></i></h5>
                                                            <span class="text-muted font-size-12">Card</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">Helen Warren</h5>
                                                            <span class="text-muted font-size-12">Pay</span>
                                                        </td>
                                                    </tr>
    
                                                    <tr>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">4265 **** **** 0025</h5>
                                                            <span class="text-muted font-size-12">28 Jan 2019</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">$1254.00</h5>
                                                            <span class="text-muted font-size-12">Amount</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-17 mb-1 font-weight-normal"><i class="fab fa-cc-stripe"></i></h5>
                                                            <span class="text-muted font-size-12">Card</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">Kayla Lambie</h5>
                                                            <span class="text-muted font-size-12">Pay</span>
                                                        </td>
                                                    </tr>
    
                                                    <tr>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">5570 **** **** 8547</h5>
                                                            <span class="text-muted font-size-12">08 Dec 2018</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">$784.25</h5>
                                                            <span class="text-muted font-size-12">Amount</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-17 mb-1 font-weight-normal"><i class="fab fa-cc-amazon-pay"></i></h5>
                                                            <span class="text-muted font-size-12">Card</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">Hugo Lavarack</h5>
                                                            <span class="text-muted font-size-12">Pay</span>
                                                        </td>
                                                    </tr>
    
                                                    <tr>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">7845 **** **** 5214</h5>
                                                            <span class="text-muted font-size-12">03 Dec 2018</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">$485.24</h5>
                                                            <span class="text-muted font-size-12">Amount</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-17 mb-1 font-weight-normal"><i class="fab fa-cc-visa"></i></h5>
                                                            <span class="text-muted font-size-12">Card</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">Amber Scurry</h5>
                                                            <span class="text-muted font-size-12">Pay</span>
                                                        </td>
                                                    </tr>
    
                                                    <tr>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">4257 **** **** 7852</h5>
                                                            <span class="text-muted font-size-12">12 Nov 2018</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">$8964.04</h5>
                                                            <span class="text-muted font-size-12">Amount</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-17 mb-1 font-weight-normal"><i class="fab fa-cc-visa"></i></h5>
                                                            <span class="text-muted font-size-12">Card</span>
                                                        </td>
                                                        <td>
                                                            <h5 class="font-size-15 mb-1 font-weight-normal">Caitlyn Gibney</h5>
                                                            <span class="text-muted font-size-12">Pay</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div className="home-gallery">
                                <div className="home-gallery1">
                                    <h1 className="home-gallery-heading heading2">Now Playing</h1>
                                    <div className="home-container29">
                                    {
                                        currentMovies.map((movie) => (
                                            <GalleryCard3
                                                image_src={movie.imageUrl}
                                                rootClassName="rootClassName"
                                            ></GalleryCard3>
                                        ))
                                    }
                                    </div>
                                </div>
                            </div>
                            <div className="home-gallery">
                                <div className="home-gallery1">
                                    <h1 className="home-gallery-heading heading2">Coming Soon</h1>
                                    <div className="home-container29">
                                    {
                                        futureMovies.map((movie) => (
                                            <GalleryCard3
                                                image_src={movie.imageUrl}
                                                    rootClassName="rootClassName"
                                                ></GalleryCard3>
                                            ))
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
  );
}

export default Admin
