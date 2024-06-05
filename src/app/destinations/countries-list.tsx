import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

type CountriesListProps = {
  CountriesName: string;
};
export default function CountriesList({ CountriesName }: CountriesListProps) {
  return (
    <>
      <div className="py-3">
        <div className="flex items-center gap-4 py-1 cursor-pointer">
          <FaMapMarkerAlt size={30} color="#00DBFF" />
          <h2 className="uppercase text-xl font-medium">{CountriesName}</h2>
        </div>

        {/* <div className="border-b-[1px] border-[#ececec] my-2"></div> */}
      </div>
    </>
  );
}
