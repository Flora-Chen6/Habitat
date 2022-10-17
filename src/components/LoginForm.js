import React, {useState} from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '/Users/lilin/WebstormProjects/habitat/src/components/index.css';

function LoginForm( { Login, error}) {
    const [details, setDetails] = useState({name: '', email:'', password:''});
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

  return (
      <body className="d-flex justify-content-center">

        <main className="form-signin">
            <img className="mb-4" src="https://donatestock.com/sites/default/files/styles/de2e/public/2021-03/AHFH_Color-With-New-Tagline_RGB_lo%20res_0.png?itok=tozizJGq"
                 alt="no show" width="260" height="110"></img>
            <h1 className="h3 mb-4 fw-normal w-1000">Sign In As Board Member</h1>
            {(error !== '')? (<div className = 'error'> {error} </div>):''}
            <form onSubmit = {submitHandler}>
                <div className = "form-inner">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="your name" onChange = {e => setDetails({...details, name: e.target.value})} value = {details.name} />
                        <label htmlFor="name">Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange = {e => setDetails({...details, email: e.target.value})} value = {details.email} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange = {e => setDetails({...details, password: e.target.value})} value = {details.password} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit" value = "LOGIN">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>

                </div>
            </form>
        </main>
    </body>
  )
}

export default LoginForm