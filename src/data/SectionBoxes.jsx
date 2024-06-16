import { LiaKissWinkHeartSolid } from 'react-icons/lia';
import { LiaSadCrySolid } from 'react-icons/lia';
import { RxShadowNone } from "react-icons/rx";
import { LiaAngrySolid } from 'react-icons/lia';

import Love from '../assets/section-icon/inside-out-love.png';
import Sadness from '../assets/section-icon/inside-out-sadness.png';
import Anger from '../assets/section-icon/inside-out-anger.png'
import Uncategorize from '../assets/section-icon/inside-out-uncategorize.jpg'

export const SectionBoxes = [
  {
    id: 1,
    title: "Love",
    icon: <LiaKissWinkHeartSolid size={23}/>,
    image: Love,
    category: "love",
  },
  {
    id: 2,
    title: "Sadness",
    icon: <LiaSadCrySolid size={23}/>,
    image: Sadness,
    category: "sadness",
  },
  {
    id: 3,
    title: "Anger",
    icon: <LiaAngrySolid size={23}/>,
    image: Anger,
    category: "anger",
  },
  {
    id: 4,
    title: "Uncategorize",
    icon: <RxShadowNone size={20}/>,
    image: Uncategorize,
    category: "uncategorize",
  },
]