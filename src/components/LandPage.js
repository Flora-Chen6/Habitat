import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function LandPage() {
    return (
        <header className="pb-4 mb-3">
            <div className="container">
                <div className="pb-4 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end border-bottom">
                    <a href="/" className="d-flex align-items-center mb-2 mt-0 px-2 mb-lg-0 text-dark text-decoration-none">
                        <img className="bi me-2" width="100" height="33" src="https://raceplacecom.s3.amazonaws.com/uploads/event/image/57441/85c6a53f-259d-4017-8452-9f6699cab91f.png">
                        </img>
                    </a>

                    <form className="col-lg-auto mb-3 mb-lg-0 me-lg-3 me-md-auto" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>

                    <ul className="nav col-12 col-lg-auto mb-2 me-lg-auto text-end">
                        <li><a href="#" className="nav-link px-2 link-secondary">My Pings</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">My Calendar</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">My Hours</a></li>
                    </ul>

                    <div className="dropdown text-end">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://w7.pngwing.com/pngs/826/388/png-transparent-sloth-nick-wilde-animation-film-drawing-sloth-miscellaneous-fauna-snout-thumbnail.png"
                                 alt="mdo" width="40" height="40"
                                 className="rounded-circle"/>
                        </a>
                        <ul className="dropdown-menu text-small">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr className="dropdown-divider"></hr>
                            </li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>


            </div>

            <div className="d-flex justify-content-between container">
                <div className="p-2 w-small mt-5">
                    <ul className="nav nav-pills flex-column mb-auto pt-3 px-1">
                        <li className="nav-item py-2">
                            <a href="#" className="nav-link active" aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Home
                            </a>
                        </li>
                        <li className="nav-item py-2">
                            <a href="#" className="nav-link" aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Messages
                            </a>
                        </li>
                        <li className="nav-item py-2">
                            <a href="#" className="nav-link" aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Events
                            </a>
                        </li>
                        <li className="nav-item py-2">
                            <a href="#" className="nav-link" aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Documents
                            </a>
                        </li>
                        <li className="nav-item py-2">
                            <a href="#" className="nav-link" aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Orientation
                            </a>
                        </li>
                        <li className="nav-item py-2">
                            <a href="#" className="nav-link" aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                People Directory
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="list-group mt-5 pt-4 w-50">
                    <div className="col-md-12">
                        <h2>Good Morning, Flash!</h2>
                        <div className="h-80 mt-3 p-5 text-white bg-secondary rounded-3">
                            <p> Current Project: A, B</p>
                            <p> Worked Hours: </p>
                            <div className="progress">
                            </div>
                        </div>
                    </div>
                </div>

            <div className="list-group mt-5 pt-4 w-25">
                <h4 className="mb-4">Upcoming Events:</h4>

                <a href=" " className="list-group-item list-group-item-action active" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Client Meeting</h5>
                        <small>Oct 1st</small>
                    </div>
                    <p className="mb-1">Meeting info:</p>
                    <small>Location:</small>
                </a>

                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Picnic</h5>
                        <small className="text-muted">Oct 1st</small>
                    </div>
                    <p className="mb-1">Meeting info:</p>
                    <small>Location:</small>
                </a>

                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Daily Scrum</h5>
                        <small className="text-muted">Oct 1st</small>
                    </div>
                    <p className="mb-1">Meeting info:</p>
                    <small>Location:</small>
                </a>

            </div>
            </div>
         </header>
    )
}

export default LandPage