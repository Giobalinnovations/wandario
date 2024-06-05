import SectionTitle from './ui/section-title';
import { rentalVacations } from '@/lib/data';

export default function RentalVations() {
  return (
    <>
      <SectionTitle title="Rentals For Your Vacation" />
      {rentalVacations.map((vacation, index) => (
        <RentalVations key={index} {...vacation} />
      ))}
    </>
  );
}
