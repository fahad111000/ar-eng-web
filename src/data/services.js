import {
  LuBuilding2,
  LuBox,
  LuPencilRuler,
  LuMapPin,
  LuCalculator,
  LuHardHat,
  LuTruck,
  LuMonitor,
} from "react-icons/lu";

export const services = [
  {
    id: "civil",
    title: "Civil & Structural Engineering",
    Icon: LuBuilding2,
    bullets: [
      "Structural Design and Analysis",
      "RCC and Steel Structure Design",
      "Seismic Analysis and Design",
      "Construction Supervision",
    ],
  },
  {
    id: "bim",
    title: "BIM (Building Information Modeling)",
    Icon: LuBox,
    bullets: [
      "3D BIM Modeling in Revit",
      "Clash Detection and Coordination",
      "4D Planning and 5D Cost Estimation",
      "Shop and As-Built Drawings",
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Building Design",
    Icon: LuPencilRuler,
    bullets: [
      "2D Floor Plans and Layouts",
      "3D Building Visualization",
      "Interior and Exterior Design",
      "Working and Construction Drawings",
    ],
  },
  {
    id: "gis",
    title: "GIS & Remote Sensing",
    Icon: LuMapPin,
    bullets: [
      "GIS Mapping and Spatial Analysis",
      "Satellite Image Analysis",
      "Land Use and Land Cover Mapping",
      "GIS Database Development",
    ],
  },
  {
    id: "qs",
    title: "Quantity Surveying & Cost Estimation",
    Icon: LuCalculator,
    bullets: [
      "Detailed BOQ Preparation",
      "Quantity Takeoff and Rate Analysis",
      "Tender and Bid Documentation",
      "Budgeting and Cost Control",
    ],
  },
  {
    id: "construction",
    title: "Construction & Project Management",
    Icon: LuHardHat,
    bullets: [
      "Residential and Commercial Construction",
      "Turnkey Construction Solutions",
      "Site Supervision and Management",
      "Quality Control and Assurance",
    ],
  },
  {
    id: "procurement",
    title: "Procurement & Tender Consultancy",
    Icon: LuTruck,
    bullets: [
      "Government and Private Tender Consultancy",
      "Technical and Financial Bid Preparation",
      "International Product Sourcing",
      "Material and Equipment Procurement",
    ],
  },
  {
    id: "software",
    title: "Engineering Software & Technical Consultancy",
    Icon: LuMonitor,
    bullets: [
      "AutoCAD 2D and 3D Drafting",
      "ETABS, SAP2000 and Robot Analysis",
      "Microsoft Project and Primavera P6",
      "Technical Reports and Documentation",
    ],
  },
];