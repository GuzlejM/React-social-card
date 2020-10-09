import React from 'react';
import TitleSection from './TitleSection';
import PreviewSection from './PreviewSection';
import ButtonSection from './ButtonSection';

function SocialCard(props) {
    return(
      <div>
          <hr></hr>
          <div className="card">
            <TitleSection />
            <PreviewSection />
            <ButtonSection />
          </div>
          <hr></hr>
      </div>
    ) 
}

export default SocialCard;