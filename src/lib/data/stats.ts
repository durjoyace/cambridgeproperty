const FOUNDING_YEAR = 2010;
const FOUNDING_MONTH = 1; // January

function getYearsInOperation(): number {
  const now = new Date();
  const years = now.getFullYear() - FOUNDING_YEAR;
  // If we haven't reached the founding month yet this year, subtract 1
  return now.getMonth() + 1 >= FOUNDING_MONTH ? years : years - 1;
}

export const COMPANY_STATS = {
  totalDoors: 75,
  residentialUnits: 63,
  retailDoors: 12,
  foundingYear: FOUNDING_YEAR,
  yearsInOperation: getYearsInOperation(),
  ownerOperated: "100%",
  activeCaseStudies: 2,
} as const;
