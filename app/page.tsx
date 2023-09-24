import { Hero, CarCatalogue } from '@/components'
import { fetchCars } from '@/utils'

export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '', 
    year: searchParams.year || 2022, 
    fuel: searchParams.fuel || '', 
    limit: searchParams.limit || 10, 
    model: searchParams.model || ''
  }); 
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars; 

  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue isDataEmpty={isDataEmpty} allCars={allCars} limit={searchParams.limit}/>
    </main>
  )
}
