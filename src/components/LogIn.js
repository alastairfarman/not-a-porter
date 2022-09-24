export default function LogIn() {
    return(
        <>
        <div className="log-in-container">
            <div className="form-header"><h4>MY ACCOUNT</h4></div>
            <div>
                <form>
                <label for="email">Email Address</label>
                <br></br>
                <input type="text" id="email" name="email" required></input>
                <br></br>
                <br></br>
                <label for="password">Password</label>
                <br></br>
                <input type="password" id="password" name="password" required></input>
                <br></br>
                <br></br>
                <input type="submit" value="Sign in"></input>
                <br></br>
                <br></br>
                <a href="">Forgotten your password?</a>
                </form>
            </div>
        </div>
        </>
    )
}