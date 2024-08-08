import React from "react";
import { Link } from "gatsby";

export default function Logo() {
    return (
        <div className="h-16 w-16">
        <Link to="/">
        <img
            src="https://fintechsociety.comp.nus.edu.sg/_next/image?url=%2Fimages%2Fblack-fintech-logo.jpg&w=128&q=75"
            alt="logo"

        />
        </Link>
        </div>
    );
}