export default function SignUp() {
    return (
        <div>
            <h1> Sign Up Page </h1>
            <form>
                <div className="mb-3">
                    <label for="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username"/>
                </div>

                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>

                <div className="mb-3">
                    <label for="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="confirmPassword" className="form-control" id="confirmPassword" />
                </div>

                <div className="mb-3">
                    <label for="adminCode" className="form-label">Admin Registration Code</label>
                    <input type="adminCode" className="form-control" id="adminCode" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}