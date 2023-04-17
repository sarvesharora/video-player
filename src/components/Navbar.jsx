import React from "react";
import reactLogo from "../assets/react.svg";
export default function Navbar(props) {
    const [searchUrl, setSearchUrl] = React.useState("");
    return (
        <div className="navbar">
            <input
                className="navbar-search"
                type="url"
                value={searchUrl}
                placeholder="Enter Url"
                onChange={(e) => {
                    e.preventDefault();
                    console.log(searchUrl);
                    setSearchUrl(e.target.value);
                }}
            />
            <input
                type="submit"
                className="navbar-submit"
                onClick={() => {
                    console.log("url changed to", searchUrl);
                    props.setUrl(searchUrl);
                }}
            />
        </div>
    );
}
