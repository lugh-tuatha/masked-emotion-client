import { LiaKissWinkHeartSolid } from 'react-icons/lia';
import { LiaSadCrySolid } from 'react-icons/lia';
import { LiaAngrySolid } from 'react-icons/lia';

import Love from '../assets/section-icon/Love.gif';
import Sadness from '../assets/section-icon/sad.gif';
import Anger from '../assets/section-icon/angry.gif'

export const SectionBoxes = [
  {
    id: 1,
    title: "Love",
    icon: <LiaKissWinkHeartSolid size={23}/>,
    image: Love,
    link: "/release/love",
  },
  {
    id: 2,
    title: "Sadness",
    icon: <LiaSadCrySolid size={23}/>,
    image: Sadness,
    link: "/release/sadness",
  },
  {
    id: 3,
    title: "Anger",
    icon: <LiaAngrySolid size={23}/>,
    image: Anger,
    link: "/release/anger",
  },
]