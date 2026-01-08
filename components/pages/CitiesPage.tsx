import React, { lazy, Suspense, useState } from 'react';
import type { CityMarker } from './CitiesMap';

const LazyCitiesMap = lazy(() => import('./CitiesMap'));

const QUIZ_LINK = 'https://form.typeform.com/to/dECpvX3S';

type City = {
  id: string;
  name: string;
  country: string;
  coordinates: CityMarker['coordinates'];
};

const cities: City[] = [
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    coordinates: [18.4241, -33.9249],
  },
  {
    id: 'johannesburg',
    name: 'Johannesburg',
    country: 'South Africa',
    coordinates: [28.0473, -26.2041],
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    coordinates: [-0.1276, 51.5072],
  },
  {
    id: 'munich',
    name: 'Munich',
    country: 'Germany',
    coordinates: [11.582, 48.1351],
  },
];

const MapSkeleton: React.FC = () => (
  <div className="h-[320px] md:h-[420px] w-full rounded-[28px] bg-gradient-to-br from-[#0a1a2c] via-[#0b2338] to-[#030c18] animate-pulse border border-white/10 shadow-2xl" />
);

const CitiesPage: React.FC = () => {
  const [selectedCityId, setSelectedCityId] = useState<string>(cities[0].id);

  const handleSelect = (cityId: string) => {
    setSelectedCityId(cityId);
  };

  return (
    <section className="pt-32 md:pt-40 pb-24 bg-gradient-to-b from-white via-[#effbff] to-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-meetable-primary/80 mb-4">
            Cities
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-meetable-dark mb-4">
            We&apos;re hosting dinners worldwide
          </h1>
          <p className="text-lg text-gray-600">
            We&apos;re hosting dinners in a growing set of cities. Pick yours to see what&apos;s available.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {cities.map((city) => {
            const isActive = city.id === selectedCityId;
            return (
              <button
                key={city.id}
                className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-150 ease-out motion-reduce:transition-none ${
                  isActive
                    ? 'bg-meetable-dark text-white border-meetable-dark shadow-lg'
                    : 'bg-white text-meetable-dark border-slate-200 hover:border-meetable-primary/40'
                }`}
                aria-pressed={isActive}
                type="button"
                onClick={() => handleSelect(city.id)}
              >
                {city.name}
              </button>
            );
          })}
        </div>

        <div className="mt-12 space-y-8">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#041527] via-[#011530] to-[#000814] shadow-[0_25px_70px_rgba(1,10,20,0.55)] p-1">
            <div className="rounded-[28px] bg-[#031022]/80 p-4 md:p-6">
              <Suspense fallback={<MapSkeleton />}>
                <LazyCitiesMap
                  cities={cities}
                  selectedCityId={selectedCityId}
                  onSelect={handleSelect}
                />
              </Suspense>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <span className="px-4 py-2 rounded-full bg-white shadow border border-gray-100">
              Currently operating: {cities.length} cities
            </span>
            <a
              href={QUIZ_LINK}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-meetable-primary to-[#4fd1e3] text-white font-semibold px-6 py-3 text-sm shadow-lg hover:shadow-xl hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-meetable-primary transition-all duration-150 ease-out"
            >
              Take the quiz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesPage;
