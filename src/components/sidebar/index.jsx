import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';

import sectionBoxData from '../../json/sectionBoxes.json'

function Sidebar() {
const sectionBoxes = sectionBoxData.sectionBoxes.map((sectionBox, index) => (
    <li key={index}>
        <Link to={sectionBox.link}>{sectionBox.description}</Link>
    </li>
));

return (
    <nav className='sidenav'>
        <ul>
            <h1>Explore Emotions</h1>
            {sectionBoxes}
        </ul>
    </nav>
)
}

export default Sidebar