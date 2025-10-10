"use client";

import { MapIcon, Navigation2Icon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Map Controls";

const Example = () => {
  const [mapView, setMapView] = useState("satellite");

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setMapView("satellite")}
          size="sm"
          variant={mapView === "satellite" ? "default" : "outline"}
        >
          Satellite
        </Button>
        <Button
          onClick={() => setMapView("road")}
          size="sm"
          variant={mapView === "road" ? "default" : "outline"}
        >
          Road
        </Button>
        <Button
          onClick={() => setMapView("terrain")}
          size="sm"
          variant={mapView === "terrain" ? "default" : "outline"}
        >
          Terrain
        </Button>
        <Button
          onClick={() => setMapView("hybrid")}
          size="sm"
          variant={mapView === "hybrid" ? "default" : "outline"}
        >
          Hybrid
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => setMapView("map")}
          size="sm"
          variant={mapView === "map" ? "default" : "outline"}
        >
          <MapIcon />
          Map
        </Button>
        <Button
          onClick={() => setMapView("street")}
          size="sm"
          variant={mapView === "street" ? "default" : "outline"}
        >
          <Navigation2Icon />
          Street
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
