import "../../homescreen.css"
import Background from '../assets/images/cropped.jpeg'; // with import
import React from 'react'

export default function DaBackground() {
    return (
        <img className = 'chickennoodle' src={Background} />
    )
}
