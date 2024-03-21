import { TbBeach, TbBrandVisualStudio, TbBuildingCommunity, TbBuildingCottage, TbBuildingEstate, TbFoldUp, TbMountain, TbPool, TbThumbDown } from 'react-icons/tb';
import { FaSchool, FaBuilding, FaDoorOpen, FaInbox, FaBed, FaStudiovinari, FaCity, FaWarehouse, FaTrailer, FaTractor } from 'react-icons/fa';

import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCampingTent, 
  GiCastle, 
  GiCaveEntrance, 
  GiCube, 
  GiFarmer, 
  GiForestCamp, 
  GiIsland,
  GiWindmill,


} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdHome, MdHouse, MdOtherHouses, MdOutlineVilla } from 'react-icons/md';

export const categories = [

  {
    label: 'Appartment Flat ',
    icon: FaBuilding,
    description: 'This property is an Appartment building!'
  },
 
  {
    label: 'Bedsitter',
    icon: FaBed,
    description: 'This property is a bedsitter!'
  },
  {
    label: 'Single room',
    icon: FaDoorOpen,
    description: 'This property is a single room!'
  },



  {
    label: 'Mansion',
    icon:  GiCastle,
    description: 'This property is a mansion!',
  },
  {
    label: 'Beachhouse',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Villa',
    icon: MdOutlineVilla,
    description: 'This property is a modern villa!'
  },

  {
    label: 'Tiny house',
    icon: GiCube,
    description: 'This is property is tiny house!'
  },


  {
    label: 'Single family',
    icon: MdHouse,
    description: 'This property is a modern villa!'
  },
  {
    label: 'Bungalow',
    icon: TbBuildingCottage,
    description: 'This property is in the countryside!'
  },

  {
    label: 'Barn',
    icon: GiBarn,
    description: 'This property is a barn!'
  },
  {
    label: 'carbin',
    icon: FaTrailer,
    description: 'This property is a carbin house!'
  },
  {
    label: 'Farm house',
    icon: FaTractor,
    description: 'This property is a farm house!'
  },
  {
    label: 'Town house',
    icon: TbBuildingCommunity,
    description: 'This property is a townhouse!'
  },
  
  {
    label: 'Office',
    icon: FaCity,
    description: 'This property is an office space!'
  },
  {
    label: 'Warehouse',
    icon: FaWarehouse,
    description: 'This property is a warehouse!'
  },
];

export const LISTINGS_BATCH = 16;

export const menuItems = [
  {
    label: "Home",
    path: "../",
  },

  {
    label: "My trips",
    path: "/trips",
  },
  {
    label: "My favorites",
    path: "/favorites",
  },
  {
    label: "My reservations",
    path: "/reservations",
  },
  {
    label: "My properties",
    path: "/properties",
  },
];
