import React from 'react'
import { CarCard, CustomFilter, SearchBar, ShowMore } from '.'
import { fuels, yearsOfProduction } from '@/constants'
import { CarCatalogueProps } from '@/types';

const CarCatalogue = ({isDataEmpty, allCars, limit}: CarCatalogueProps) => {
  return (
    <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'> Car Catalogue</h1>
          <p> Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels}/>
            <CustomFilter title='year' options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => <CarCard car={car}/>)}
            </div>
            <ShowMore pageNumber={(limit || 10) / 10} isNext={(limit || 10) > allCars.length} />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          </div>
        )}
      </div>
  )
}

export default CarCatalogue