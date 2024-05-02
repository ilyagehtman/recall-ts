import './Missing.sass'
import React from 'react'
import Layout from '../../layout/Layout.tsx'


const Missing = () => {
    return (
        <Layout>
            <div className="missing">
                <div className="missing__body">
                    <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M132.734 136.159H4.97781C3.30577 136.159 1.92536 134.78 2.00313 133.111C2.00313 133.111 26.3644 76.1752 56.4029 70.5263C56.9667 70.4292 57.025 69.7109 56.4806 69.5168C55.9362 69.3227 34.1608 32.7697 34.1608 32.7697C34.1608 32.7697 50.0841 3.90396 64.7825 2.23452C85.8775 -0.172583 103.784 16.2695 103.784 36.8851C103.784 51.7742 94.4321 64.5085 81.2696 69.5168C80.7447 69.7109 80.803 70.4292 81.3474 70.5263C111.366 76.1752 135.708 133.111 135.708 133.111C135.786 134.78 134.406 136.159 132.734 136.159Z"
                            stroke="#E0E2E5" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"
                            strokeLinejoin="round"/>
                        <path d="M78 51C78 47.134 74.866 44 71 44C67.134 44 64 47.134 64 51" stroke="#E0E2E5"
                              strokeWidth="3"/>
                    </svg>
                    <h1 className="h-string h-string--alt">такой страницы не существует (404)</h1>
                </div>
            </div>
        </Layout>
    )
}

export default Missing