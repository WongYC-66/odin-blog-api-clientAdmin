export default function SignUp() {
    return (
        <div>
            <h1> Sign In Page </h1>
            <form>
                <div className="mb-3">
                    <label for="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username"/>
                </div>

                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}