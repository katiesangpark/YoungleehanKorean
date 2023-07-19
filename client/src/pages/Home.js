import "../styles/pages/Home.scss";

export default function Home() {
    return (
        <div
            style={{ height: "50vh", maxWidth: "1175px" }}
            className="container-fluid d-flex flex-column align-items-center justify-content-center"
        >
            <h1>This is Home page</h1>
            <div className="inputContainer justify-content-between mt-5">
                <input type="text" placeholder="Type here"></input>
                <button className="btn btn-primary">Primary Button</button>
                <button className="btn btn-secondary">Secondary Button</button>
            </div>
        </div>
    );
}
