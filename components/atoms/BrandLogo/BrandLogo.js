import React from "react"
import PropTypes from "prop-types"
import {v4 as uuidv4} from 'uuid';

BrandLogo.propTypes = {
    className: PropTypes.string
}

export function BrandLogo({ className = "" }) {
    const svgTitleId = uuidv4();
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="31"
        viewBox="0 0 76 31"
        className={className}
        aria-labelledby={svgTitleId}
        role="img"
      >
        <title id={svgTitleId}>Brand logo image</title>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g fill="currentColor" transform="translate(-204 -43)">
            <g transform="translate(204 43)">
              <path d="M30 0v11.176h-4.116l-6.216 14.532-6.216-14.532H9V30H0V0h30zM12.92 18.008L17.885 30H12.92V18.008zm13.468 0V30h-4.939l4.939-11.992z"></path>
              <path
                fillRule="nonzero"
                d="M48.816 15.208V30.72h-3.948v-1.96a5.175 5.175 0 01-1.974 1.582 6.128 6.128 0 01-2.646.574c-1.213 0-2.287-.257-3.22-.77-.933-.513-1.666-1.27-2.198-2.268-.532-.999-.798-2.189-.798-3.57v-9.1h3.92v8.54c0 1.232.308 2.18.924 2.842.616.663 1.456.994 2.52.994 1.083 0 1.932-.331 2.548-.994.616-.663.924-1.61.924-2.842v-8.54h3.948z"
              ></path>
              <path
                fillRule="nonzero"
                d="M56.6 10L56.6 30.72 52.68 30.72 52.68 10z"
              ></path>
              <path
                fillRule="nonzero"
                d="M59.456 22.908c0-1.568.313-2.959.938-4.172.625-1.213 1.475-2.147 2.548-2.8s2.273-.98 3.598-.98c1.157 0 2.17.233 3.038.7.868.467 1.563 1.055 2.086 1.764v-2.212h3.948V30.72h-3.948v-2.268c-.504.728-1.2 1.33-2.086 1.806-.887.476-1.909.714-3.066.714-1.307 0-2.497-.336-3.57-1.008-1.073-.672-1.923-1.62-2.548-2.842-.625-1.223-.938-2.627-.938-4.214zm12.208.056c0-.952-.187-1.769-.56-2.45a3.948 3.948 0 00-1.512-1.568 4.041 4.041 0 00-2.044-.546c-.728 0-1.4.177-2.016.532-.616.355-1.115.873-1.498 1.554s-.574 1.489-.574 2.422.191 1.75.574 2.45c.383.7.887 1.237 1.512 1.61a3.84 3.84 0 002.002.56c.728 0 1.41-.182 2.044-.546a3.948 3.948 0 001.512-1.568c.373-.681.56-1.498.56-2.45z"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    )
}
