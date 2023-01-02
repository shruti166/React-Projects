import React from "react";
import './Link.css';

export default function Link({url, title }) {
  return <div>
    <a className = 'App-Link' href = {url}>{title}</a>
  </div>;
}
