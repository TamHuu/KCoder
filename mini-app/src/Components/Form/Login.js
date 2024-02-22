
function Login() {
    return (
        <div className='container mt-3'>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group mb3">
                            <label className="d-flex">Fullname</label>
                            <input type="text " className="form-control" placeholder="Fullname" />
                        </div>
                        <div className="form-group mb3">
                            <label className="d-flex">Email</label>
                            <input type="text " className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group mb3">
                            <label className="d-flex">Dob</label>
                            <input type="text " className="form-control" placeholder="Dob" />
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="form-group mb3">
                            <label className="d-flex">Avatar</label>
                            <input type="text " className="form-control" placeholder="Avatar" />
                        </div>
                        <label className="d-flex">Gender</label>
                        <div className="d-flex">
                            <div className="form-check me-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Female
                                </label>
                            </div>
                        </div>



                    </div>
                </div>
                <br />
                <div className="d-flex ">

                    <button className="btn btn-primary me-2" type="submit">Create</button>
                    <button className="btn btn-danger" type="button">Cancel</button>
                </div>

            </form>
        </div>

    );
}

export default Login;