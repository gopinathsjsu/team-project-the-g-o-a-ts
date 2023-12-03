import React from 'react'

import { Helmet } from 'react-helmet'

const Admin = (props) => {
  return (
        <div id="layout-wrapper">
            <div class="main-content">
                <header id="page-topbar">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <div class="d-flex align-items-center">
                                <button type="button" class="btn btn-sm mr-2 d-lg-none header-item" data-toggle="collapse" data-target="#topnav-menu-content">
                                    <i class="fa fa-fw fa-bars"></i>
                                </button>
                                <div class="header-breadcumb">
                                    <h2 class="header-title">Dashboard</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div class="topnav">
                    <div class="container-fluid">
                        <nav class="navbar navbar-dark navbar-expand-lg topnav-menu">
                            
                            <div class="collapse navbar-collapse" id="topnav-menu-content">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.html">
                                            <i class="feather-home mr-2"></i>Dashboards
                                        </a>
                                    </li>
                                    
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="feather-copy mr-2"></i>Pages <div class="arrow-down"></div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="topnav-pages">
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Auth Pages <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-auth">
                                                    <a href="auth-login.html" class="dropdown-item">Login</a>
                                                    <a href="auth-register.html" class="dropdown-item">Register</a>
                                                    <a href="auth-recoverpw.html" class="dropdown-item">Recover Password</a>
                                                    <a href="auth-lock-screen.html" class="dropdown-item">Lock Screen</a>
                                                    <a href="auth-404.html" class="dropdown-item">Error 404</a>
                                                    <a href="auth-500.html" class="dropdown-item">Error 500</a>
                                                </div>
                                            </div>
                                            <a href="pages-invoice.html" class="dropdown-item">Invoice</a>
                                            <a href="pages-starter.html" class="dropdown-item">Starter Page</a>
                                            <a href="pages-maintenance.html" class="dropdown-item">Maintenance</a>
                                            <a href="pages-faqs.html" class="dropdown-item">FAQs</a>
                                            <a href="pages-pricing.html" class="dropdown-item">Pricing</a>
                                            <a href="pages-team.html" class="dropdown-item">Team</a>
                                        </div>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="feather-briefcase mr-2"></i>UI Elements <div class="arrow-down"></div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="topnav-components">
                                            <a href="ui-typography.html" class="dropdown-item">Typography</a>
                                            <a href="ui-cards.html" class="dropdown-item">Cards</a>
                                            <a href="ui-buttons.html" class="dropdown-item">Buttons</a>
                                            <a href="ui-modals.html" class="dropdown-item">Modals</a>
                                            <a href="ui-tabs.html" class="dropdown-item">Tabs</a>
                                            <a href="ui-progressbars.html" class="dropdown-item">Progress Bars</a>
                                            <a href="ui-toasts.html" class="dropdown-item">Toasts</a>
                                            <a href="ui-carousel.html" class="dropdown-item">Carousel</a>
                                            <a href="ui-embeds.html" class="dropdown-item">Embeds</a>
                                            <a href="ui-tooltips-popovers.html" class="dropdown-item">Tooltips & Popovers</a>
                                            <a href="ui-media-objects.html" class="dropdown-item">Media Objects</a>
                                            <a href="ui-general.html" class="dropdown-item">General</a>
                                            <a href="ui-grid.html" class="dropdown-item">Grid</a>
                                            <a href="ui-spinners.html" class="dropdown-item">Spinners</a>
                                            <a href="ui-scrollspy.html" class="dropdown-item">Scrollspy</a>
                                            <a href="ui-sweetalerts.html" class="dropdown-item">Sweet Alerts</a>
                                        </div>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-charts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="feather-bar-chart-2 mr-2"></i>Charts <div class="arrow-down"></div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="topnav-charts">
                                            <a href="charts-morris.html" class="dropdown-item">Morris</a>
                                            <a href="charts-google.html" class="dropdown-item">Google</a>
                                            <a href="charts-chartjs.html" class="dropdown-item">Chartjs</a>
                                            <a href="charts-sparkline.html" class="dropdown-item">Sparkline</a>
                                            <a href="charts-knob.html" class="dropdown-item">Jquery Knob</a>
                                        </div>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-forms" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="feather-disc mr-2"></i>Forms <div class="arrow-down"></div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="topnav-forms">
                                            <a href="forms-elements.html" class="dropdown-item">Elements</a>
                                            <a href="forms-plugins.html" class="dropdown-item">Plugins</a>
                                            <a href="forms-validation.html" class="dropdown-item">Validation</a>
                                            <a href="forms-mask.html" class="dropdown-item">Masks</a>
                                            <a href="forms-quilljs.html" class="dropdown-item">Quilljs</a>
                                            <a href="forms-uploads.html" class="dropdown-item">File Uploads</a>
                                        </div>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="feather-book-open mr-2"></i>More <div class="arrow-down"></div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="topnav-more">
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-tables" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Tables <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-tables">
                                                    <a href="tables-basic.html" class="dropdown-item">Basic Tables</a>
                                                    <a href="tables-datatables.html" class="dropdown-item">Data Tables</a>
                                                </div>
                                            </div>
                                            <a href="calendar.html" class="dropdown-item">Calendar</a>
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-icons" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Icons <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-icons">
                                                    <a href="icons-feather.html" class="dropdown-item">Feather Icons</a>
                                                    <a href="icons-materialdesign.html" class="dropdown-item">Material Design</a>
                                                    <a href="icons-dripicons.html" class="dropdown-item">Dripicons</a>
                                                    <a href="icons-fontawesome.html" class="dropdown-item">Font awesome</a>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-maps" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Maps <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-maps">
                                                    <a href="maps-google.html" class="dropdown-item">Google Maps</a>
                                                    <a href="maps-vector.html" class="dropdown-item">Vector Maps</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>                

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
                    </div> 
                </div>
            </div>
        </div>
  );
}

export default Admin
