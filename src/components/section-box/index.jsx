import React from 'react';
import './section-box.css';

import LoveIcon from '../../assets/section-icon/Love.gif';
import SadnessIcon from '../../assets/section-icon/sad.gif';
import AngerIcon from '../../assets/section-icon/angry.gif';
import ComingSoon from '../../assets/section-icon/coming-soon.png';

// import HappinessIcon from '../../assets/section-icon/happiness.svg';
// import RegretIcon from '../../assets/section-icon/regret.svg';
// import AnxietyIcon from '../../assets/section-icon/anxiety.svg';
// import HopeIcon from '../../assets/section-icon/hope.svg';
// import ConfusionIcon from '../../assets/section-icon/confusion.svg';
// import GuiltIcon from '../../assets/section-icon/guilt.svg';
// import GratitudeIcon from '../../assets/section-icon/gratitude.svg';
// import FearIcon from '../../assets/section-icon/fear.svg';
// import DreamIcon from '../../assets/section-icon/dream.svg';

function SectionBox(props) {
  // Create a variable to hold the icon image based on the title prop
  let iconImage;
  switch (props.title) {
    case 'Love':
      iconImage = <img src={LoveIcon}/>;
      break;
    case 'Sadness':
      iconImage = <img src={SadnessIcon}/>;
      break;
    case 'ICON':
      switch (props.description) {
        case 'ANGER':
          iconImage = <img src={AngerIcon}/>;
          break;
        case 'HAPPINESS':
          iconImage = <img src={ComingSoon}/>;
          break;
        case 'REGRET':
          iconImage = <img src={ComingSoon}/>;
          break;
        case 'ANXIETY':
          iconImage = <img src={ComingSoon}/>;
          break;
        case 'HOPE':
          iconImage = <img src={ComingSoon}/>;
          break;
        case 'CONFUSION':
          iconImage = <img src={ComingSoon}/>;
          break;
        case 'GUILT':
          iconImage = <img src={ComingSoon}/>;
          break;
        case 'GRATITUDE':
          iconImage = <img src={ComingSoon}/>;
          break;
        case 'FEAR':
          iconImage = <img src={ComingSoon}/>;
          break;
        case 'DREAM':
          iconImage = <img src={ComingSoon}/>;
          break;
        default:
          iconImage = null;
      }
      break;
    default:
      iconImage = null;
  }
  return (
    <div className="emo-box flex items-center justify-center">
      <div>
        {iconImage}
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default SectionBox;
