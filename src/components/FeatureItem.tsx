import React from 'react'

type Props = {
    source: string;
    title: string;
    text: string;
    alt: string;
}
function FeatureItem({source, title, text, alt}: Props) {
  return (
    <div className="feature-item">
          <img src={source} alt={alt} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>
            {text}
          </p>
    </div>
  )
}

export default FeatureItem