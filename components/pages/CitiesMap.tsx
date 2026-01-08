import React, { memo, useMemo, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

export interface CityMarker {
  id: string;
  name: string;
  coordinates: [number, number];
  country?: string;
}

interface CitiesMapProps {
  cities: CityMarker[];
  selectedCityId: string;
  onSelect: (cityId: string) => void;
}

const geoUrl = '/maps/world-110m.json';

const CitiesMap: React.FC<CitiesMapProps> = ({ cities, selectedCityId, onSelect }) => {
  const [hoveredCityId, setHoveredCityId] = useState<string | null>(null);

  const markers = useMemo(
    () =>
      cities.map((city) => ({
        ...city,
        isActive: city.id === selectedCityId,
      })),
    [cities, selectedCityId]
  );

  return (
    <ComposableMap
      projectionConfig={{ scale: 170, center: [12, 5] }}
      width={900}
      height={420}
      className="w-full h-full text-white"
      style={{ width: '100%', height: 'auto' }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  fill: '#05253c',
                  stroke: '#0d344f',
                  strokeWidth: 0.4,
                  outline: 'none',
                },
                hover: {
                  fill: '#0a3858',
                  outline: 'none',
                },
                pressed: {
                  fill: '#0a3858',
                  outline: 'none',
                },
              }}
            />
          ))
        }
      </Geographies>
      {markers.map((marker) => {
        const isHighlighted = marker.isActive || hoveredCityId === marker.id;
        const tooltip = `${marker.name}${marker.country ? ` • ${marker.country}` : ''}`;
        const tooltipWidth = Math.max(tooltip.length * 6 + 16, 90);

        return (
          <Marker
            key={marker.id}
            coordinates={marker.coordinates}
            role="button"
            tabIndex={0}
            className="focus:outline-none"
            aria-label={`View ${marker.name} dinners`}
            aria-pressed={marker.isActive}
            onMouseEnter={() => setHoveredCityId(marker.id)}
            onMouseLeave={() =>
              setHoveredCityId((prev) => (prev === marker.id ? null : prev))
            }
            onFocus={() => setHoveredCityId(marker.id)}
            onBlur={() =>
              setHoveredCityId((prev) => (prev === marker.id ? null : prev))
            }
            onClick={() => onSelect(marker.id)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onSelect(marker.id);
              }
            }}
          >
            <g
              className="transition-transform duration-150 ease-out motion-reduce:transition-none"
              transform={`scale(${isHighlighted ? 1.2 : 1})`}
            >
              <circle
                r={5}
                fill="#1cdad9"
                stroke="#ffffff"
                strokeWidth={1.5}
                className="drop-shadow-[0_0_6px_rgba(28,218,217,0.6)]"
              />
              <circle
                r={2}
                fill="#05253c"
                stroke="transparent"
                className="transition-opacity duration-150"
                opacity={isHighlighted ? 0 : 1}
              />
            </g>
            {(isHighlighted) && (
              <g transform={`translate(-${tooltipWidth / 2}, -28)`}>
                <rect
                  width={tooltipWidth}
                  height={26}
                  rx={13}
                  fill="#031324"
                  stroke="#14b8c4"
                  strokeWidth={0.5}
                  opacity={0.95}
                />
                <text
                  x={tooltipWidth / 2}
                  y={17}
                  textAnchor="middle"
                  className="text-[10px] font-semibold"
                  fill="#ffffff"
                >
                  {tooltip}
                </text>
              </g>
            )}
          </Marker>
        );
      })}
    </ComposableMap>
  );
};

export default memo(CitiesMap);
